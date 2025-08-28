<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\User;
use PDO;
use Config\Database;

class UserRepository
{
  public static function findById(int $id, bool $withPassword = false): ?User
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
    $stmt->execute(['id' => $id]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
      return new User($data['id'], $data['name'], $withPassword ? $data['password'] : null, $data['created_at'], $data['updated_at']);
    }

    return null;
  }

  public static function findByName(string $name, bool $withPassword = false): ?User
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM users WHERE name = :name");
    $stmt->execute(['name' => $name]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
      return new User($data['id'], $data['name'], $withPassword ? $data['password'] : null, $data['created_at'], $data['updated_at']);
    }

    return null;
  }

  public static function addUser(User $user): void
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("INSERT INTO users (name, password, created_at) VALUES (:name, :password, :created_at)");
    $stmt->execute([
      'name' => $user->name,
      'password' => $user->password,
      'created_at' => $user->created_at,
    ]);
  }
}