<?php

declare(strict_types=1);

namespace App\Services;

use App\Entities\ProjectLanguage;
use App\Repositories\ProjectLanguageRepository;
use App\Repositories\ProjectRepository;
use App\Repositories\LanguageRepository;

class ProjectLanguageService
{
  public static function getLanguagesByProjectId(int $projectId): array
  {
    $project = ProjectRepository::findById($projectId);
    if (!$project) {
      throw new \Exception('Project not found');
    }
    return ProjectLanguageRepository::findLanguagesByProjectId($projectId);
  }

  public static function attachLanguageToProject(int $languageId, int $projectId): ProjectLanguage
  {
    $project = ProjectRepository::findById($projectId);
    if (!$project) {
      echo 'Project not found $projectId: ' . $projectId;
      throw new \Exception('Project not found');
    }
    $language = LanguageRepository::findById($languageId);
    if (!$language) {
      echo 'Language not found $languageId: ' . $languageId;
      throw new \Exception('Language not found');
    }
    $existingProjectLanguage = ProjectLanguageRepository::findExistingProjectLanguage($languageId, $projectId);
    if ($existingProjectLanguage) {
      throw new \Exception('Language already attached to this project');
    }
    return ProjectLanguageRepository::attachLanguageToProject($languageId, $projectId);
  }

  public static function detachLanguageFromProject(int $languageId, int $projectId): bool
  {
    $project = ProjectRepository::findById($projectId);
    if (!$project) {
      throw new \Exception('Project not found');
    }
    $language = LanguageRepository::findById($languageId);
    if (!$language) {
      throw new \Exception('Language not found');
    }
    $existingProjectLanguage = ProjectLanguageRepository::findExistingProjectLanguage($languageId, $projectId);
    if (!$existingProjectLanguage) {
      throw new \Exception('Language not attached to this project');
    }
    return ProjectLanguageRepository::detachLanguageFromProject($languageId, $projectId);
  }
}