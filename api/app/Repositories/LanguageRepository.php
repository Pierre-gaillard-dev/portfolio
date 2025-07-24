<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\Language;
use PDO;
use Config\Database;

class LanguageRepository
{
  public static function getAll(): array
  {
    $pdo = Database::connect();
    $stmt = $pdo->query("SELECT * FROM languages");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    Database::disconnect();

    return array_map([self::class, 'map'], $rows);
  }

  public static function findById(int $id): ?Language
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM languages WHERE id = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    Database::disconnect();

    return $row ? self::map($row) : null;
  }

  public static function create(Language $language): Language
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("INSERT INTO languages (name, slug, created_at, updated_at) VALUES (?, ?, ?, ?)");
    $stmt->execute([
      $language->name,
      $language->slug,
      $language->created_at->format('Y-m-d H:i:s'),
      $language->updated_at->format('Y-m-d H:i:s')
    ]);

    return $language;
  }

  public static function update(Language $language): Language
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("UPDATE languages SET name = ?, slug = ?, updated_at = ? WHERE id = ?");
    $stmt->execute([
      $language->name,
      $language->slug,
      $language->updated_at->format('Y-m-d H:i:s'),
      $language->id
    ]);

    return $language;
  }

  public static function delete(int $id): bool
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("DELETE FROM languages WHERE id = ?");
    $result = $stmt->execute([$id]);
    Database::disconnect();

    return $result;
  }

  private static function map(array $row): Language
  {
    return new Language(
      (int) $row['id'],
      (string) $row['name'],
      (string) $row['slug'],
      new \DateTime($row['created_at']),
      isset($row['updated_at']) ? new \DateTime($row['updated_at']) : null
    );
  }
}