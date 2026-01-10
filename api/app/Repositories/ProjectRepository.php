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

  public static function findBySlug(string $slug): ?Project
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE slug = ?");
    $stmt->execute([$slug]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    Database::disconnect();

    return $row ? self::map($row) : null;
  }

  public static function create(Project $project): Project
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("INSERT INTO projects (slug, title, img, github, demo, is_playable_demo, demo_height, demo_width, aspect_ratio, video, description, conditions, copyright, started_at, finished_at, duration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([
      $project->slug,
      $project->title,
      $project->img,
      $project->github,
      $project->demo,
      $project->is_playable_demo,
      $project->demo_height,
      $project->demo_width,
      $project->aspect_ratio,
      $project->video,
      $project->description,
      $project->conditions,
      $project->copyright,
      $project->started_at ? $project->started_at->format('Y-m-d H:i:s') : null,
      $project->finished_at ? $project->finished_at->format('Y-m-d H:i:s') : null,
      $project->duration
    ]);

    return $project;
  }

  public static function update(Project $project): Project
  {
    $project->updateTimestamps();
    $pdo = Database::connect();
    $stmt = $pdo->prepare("UPDATE projects SET slug = ?, title = ?, img = ?, github = ?, demo = ?, is_playable_demo = ?, demo_height = ?, demo_width = ?, aspect_ratio = ?, video = ?, description = ?, conditions = ?, copyright = ?, started_at = ?, finished_at = ?, duration = ? WHERE id = ?");
    $stmt->execute([
      $project->slug,
      $project->title,
      $project->img,
      $project->github,
      $project->demo,
      $project->is_playable_demo,
      $project->demo_height,
      $project->demo_width,
      $project->aspect_ratio,
      $project->video,
      $project->description,
      $project->conditions,
      $project->copyright,
      $project->started_at ? $project->started_at->format('Y-m-d H:i:s') : null,
      $project->finished_at ? $project->finished_at->format('Y-m-d H:i:s') : null,
      $project->duration,
      $project->id
    ]);
    Database::disconnect();
    return $project;
  }

  public static function delete(int $id): bool
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
    $result = $stmt->execute([$id]);
    Database::disconnect();
    return $result;
  }

  private static function map(array $row): Project
  {
    return new Project(
      (int) $row['id'],
      $row['slug'],
      $row['title'],
      $row['img'],
      $row['github'],
      $row['demo'],
      $row['is_playable_demo'],
      isset($row['demo_height']) ? (int) $row['demo_height'] : null,
      isset($row['demo_width']) ? (int) $row['demo_width'] : null,
      isset($row['aspect_ratio']) ? (float) $row['aspect_ratio'] : null,
      $row['video'],
      $row['description'],
      $row['conditions'],
      $row['copyright'],
      $row['started_at'] ? new \DateTime($row['started_at']) : null,
      $row['finished_at'] ? new \DateTime($row['finished_at']) : null,
      isset($row['duration']) ? (int) $row['duration'] : null
    );
  }
}