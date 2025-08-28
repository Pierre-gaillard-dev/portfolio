<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Services\AuthService;
use Core\Response;

class AuthController
{
  /**
   * Handle user login
   */
  public static function login(): void
  {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['name']) || !isset($input['password'])) {
      Response::json(['error' => 'Name and password are required'], 400);
      return;
    }

    $result = AuthService::login($input['name'], $input['password']);

    if ($result) {
      Response::json($result, 200);
    } else {
      Response::json(['error' => 'Invalid credentials'], 401);
    }
  }

  /**
   * Handle user registration
   */
  public static function register(): void
  {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['name']) || !isset($input['password'])) {
      Response::json(['error' => 'Name and password are required'], 400);
      return;
    }

    if (strlen($input['password']) < 8) {
      Response::json(['error' => 'Password must be at least 8 characters'], 400);
      return;
    }

    try {
      $result = AuthService::register($input['name'], $input['password']);
      Response::json($result, 201);
    } catch (\Exception $e) {
      Response::json(['error' => 'Registration failed'], 500);
    }
  }

  /**
   * Refresh JWT token
   */
  public static function refresh(): void
  {
    $token = AuthService::getBearerToken();

    if (!$token) {
      Response::json(['error' => 'Missing authorization token'], 401);
      return;
    }

    $result = AuthService::refreshToken($token);

    if ($result) {
      Response::json($result, 200);
    } else {
      Response::json(['error' => 'Invalid or expired token'], 401);
    }
  }

  /**
   * Get current user profile
   */
  public static function profile(): void
  {
    $user = AuthService::requireAuth();

    Response::json([
      'user' => [
        'id' => $user->id,
        'name' => $user->name
      ]
    ], 200);
  }
}
