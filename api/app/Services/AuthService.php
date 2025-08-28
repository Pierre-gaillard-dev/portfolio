<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\UserRepository;
use App\Entities\User;

use Core\Env;
use Core\Response;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;

use Exception;

Env::load();

class AuthService
{
  /**
   * Generate JWT token for user
   */
  public static function generateToken(User $user): string
  {
    $payload = [
      'iss' => API_BASE_URL, // Issuer
      'aud' => API_BASE_URL, // Audience
      'iat' => time(), // Issued at
      'exp' => time() + (int) getenv('JWT_EXPIRATION'), // Expiration
      'sub' => $user->id, // Subject (user ID)
      'name' => $user->name,
    ];

    return JWT::encode($payload, getenv('JWT_SECRET'), getenv('JWT_ALGORITHM'));
  }

  /**
   * Verify and decode JWT token
   */
  public static function verifyToken(string $token): ?array
  {
    try {
      $decoded = JWT::decode($token, new Key(getenv('JWT_SECRET'), getenv('JWT_ALGORITHM')));
      return (array) $decoded;
    } catch (ExpiredException $e) {
      // Token has expired
      return null;
    } catch (SignatureInvalidException $e) {
      // Token signature is invalid
      return null;
    } catch (Exception $e) {
      // Other JWT errors
      return null;
    }
  }

  /**
   * Get user from JWT token
   */
  public static function getUserFromToken(string $token): ?User
  {
    $payload = self::verifyToken($token);

    if (!$payload || !isset($payload['sub'])) {
      return null;
    }

    return UserRepository::findById((int) $payload['sub']);
  }

  /**
   * Extract JWT token from Authorization header
   */
  public static function getBearerToken(): ?string
  {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? null;

    if (!$authHeader) {
      return null;
    }

    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
      return $matches[1];
    }

    return null;
  }

  /**
   * Authenticate user and return JWT token
   */
  public static function login(string $name, string $password): ?array
  {
    $user = UserRepository::findByName($name, true);
    if ($user && password_verify($password, $user->password)) {
      $token = self::generateToken($user);
      return [
        'token' => $token,
        'user' => [
          'id' => $user->id,
          'name' => $user->name
        ],
        'expires_in' => (int) getenv('JWT_EXPIRATION')
      ];
    }
    return null;
  }

  public static function register(string $name, string $password): array
  {
    $hashedPassword = password_hash($password, PASSWORD_ARGON2ID);
    $user = new User(0, $name, $hashedPassword, created_at: date('Y-m-d H:i:s'));
    UserRepository::addUser($user);

    $token = self::generateToken($user);
    return [
      'token' => $token,
      'user' => [
        'id' => $user->id,
        'name' => $user->name
      ],
      'expires_in' => (int) getenv('JWT_EXPIRATION')
    ];
  }

  /**
   * Refresh JWT token
   */
  public static function refreshToken(string $token): ?array
  {
    $user = self::getUserFromToken($token);

    if (!$user) {
      return null;
    }

    $newToken = self::generateToken($user);
    return [
      'token' => $newToken,
      'user' => [
        'id' => $user->id,
        'name' => $user->name
      ],
      'expires_in' => (int) getenv('JWT_EXPIRATION')
    ];
  }

  /**
   * Middleware to check authentication
   */
  public static function requireAuth(): ?User
  {
    $token = self::getBearerToken();

    if (!$token) {
      Response::json(['error' => 'Missing authorization token'], 401);
      exit;
    }

    $user = self::getUserFromToken($token);

    if (!$user) {
      Response::json(['error' => 'Invalid or expired token'], 401);
      exit;
    }

    return $user;
  }
}