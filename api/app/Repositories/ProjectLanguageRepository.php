<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\ProjectLanguage;
use App\Entities\Language;
use PDO;
use Config\Database;

class ProjectLanguageRepository
{
  public static function findExistingProjectLanguage(int $languageId, int $projectId): ?ProjectLanguage
  {
    $db = Database::connect();
    $stmt = $db->prepare('SELECT * FROM ' . getenv('DB_PREFIX') . 'project_language WHERE language_id = :language_id AND project_id = :project_id');
    $stmt->bindParam(':language_id', $languageId);
    $stmt->bindParam(':project_id', $projectId);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row && isset($row['language_id'], $row['project_id'], $row['created_at'], $row['updated_at'])) {
      return new ProjectLanguage(
        $row['language_id'],
        $row['project_id'],
        $row['created_at'],
        $row['updated_at']
      );
    }
    return null;
  }

  public static function findLanguagesByProjectId(int $projectId): array
  {
    $db = Database::connect();
    $stmt = $db->prepare(
      'SELECT l.* 
     FROM ' . getenv('DB_PREFIX') . 'project_language pl
     JOIN ' . getenv('DB_PREFIX') . 'languages l ON l.id = pl.language_id
     WHERE pl.project_id = :project_id'
    );
    $stmt->bindParam(':project_id', $projectId);
    $stmt->execute();

    $languages = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $languages[] = new Language(
        $row['id'],
        $row['name'],
        $row['slug'],
        new \DateTime($row['created_at']),
        new \DateTime($row['updated_at'])
      );
    }

    return $languages;
  }

  public static function attachLanguageToProject(int $languageId, int $projectId): ProjectLanguage
  {
    $db = Database::connect();
    $stmt = $db->prepare('INSERT INTO ' . getenv('DB_PREFIX') . 'project_language (language_id, project_id, created_at, updated_at) VALUES (:language_id, :project_id, NOW(), NOW())');
    $stmt->bindParam(':language_id', $languageId);
    $stmt->bindParam(':project_id', $projectId);
    $succeed = $stmt->execute();

    if (!$succeed) {
      throw new \Exception('Failed to attach language to project');
    }

    $result = new ProjectLanguage(
      $languageId,
      $projectId,
      (new \DateTime())->format('Y-m-d H:i:s'),
      (new \DateTime())->format('Y-m-d H:i:s')
    );
    if (!$result) {
      throw new \Exception('Failed to retrieve attached project language');
    }
    return $result;
  }

  public static function detachLanguageFromProject(int $languageId, int $projectId): bool
  {
    $db = Database::connect();
    $stmt = $db->prepare('DELETE FROM ' . getenv('DB_PREFIX') . 'project_language WHERE language_id = :language_id AND project_id = :project_id');
    $stmt->bindParam(':language_id', $languageId);
    $stmt->bindParam(':project_id', $projectId);
    return $stmt->execute();
  }
}