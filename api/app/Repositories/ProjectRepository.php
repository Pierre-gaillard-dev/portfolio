<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\Project;
use PDO;
use Config\Database;

class ProjectRepository
{
  public static function getAll(): array
  {
    $pdo = Database::connect();
    $stmt = $pdo->query("SELECT * FROM projects");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    Database::disconnect();

    return array_map([self::class, 'map'], $rows);
  }

  public static function findById(int $id): ?Project
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    Database::disconnect();

    return $row ? self::map($row) : null;
  }

  private static function map(array $row): Project
  {
    return new Project(
      (int) $row['id'],
      $row['title'],
      $row['img'],
      $row['github'],
      $row['demo'],
      $row['playable_demo'],
      (int) $row['demo_height'],
      (int) $row['demo_width'],
      (float) $row['aspect_ratio'],
      $row['video'],
      $row['description'],
      $row['conditions'],
      $row['copyright'],
      $row['started_at'] ? new \DateTime($row['started_at']) : null,
      $row['finished_at'] ? new \DateTime($row['finished_at']) : null,
      (int) $row['duration']
    );
  }
}