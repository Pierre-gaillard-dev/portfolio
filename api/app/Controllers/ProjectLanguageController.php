<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Services\ProjectLanguageService;
use App\Entities\ProjectLanguage;
use Core\Response;

class ProjectLanguageController
{
  public function getLanguagesByProjectId(int $projectId)
  {
    try {
      $languages = ProjectLanguageService::getLanguagesByProjectId($projectId);
      Response::json(array_map(fn($lang) => $lang->toArray(), $languages));
    } catch (\Exception $e) {
      switch ($e->getMessage()) {
        case 'Project not found':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        default:
          Response::json(['error' => 'An unexpected error occurred'], 500);
          break;
      }
    }
  }

  public function attachLanguageToProject(int $projectId, int $languageId)
  {
    try {
      $projectLanguage = ProjectLanguageService::attachLanguageToProject($languageId, $projectId);
      Response::json($projectLanguage->toArray(), 201);
    } catch (\Exception $e) {
      switch ($e->getMessage()) {
        case 'Project not found':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        case 'Language not found':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        case 'Language already attached to this project':
          Response::json(['error' => $e->getMessage()], 409);
          break;
        default:
          Response::json(['error' => 'An unexpected error occurred: ' . $e->getMessage()], 500);
          break;
      }
    }
  }

  public function detachLanguageFromProject(int $projectId, int $languageId)
  {
    try {
      ProjectLanguageService::detachLanguageFromProject($languageId, $projectId);
      Response::json(['message' => 'Language detached from project successfully'], 200);
    } catch (\Exception $e) {
      switch ($e->getMessage()) {
        case 'Project not found':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        case 'Language not found':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        case 'Language not attached to this project':
          Response::json(['error' => $e->getMessage()], 404);
          break;
        default:
          Response::json(['error' => 'An unexpected error occurred: ' . $e->getMessage()], 500);
          break;
      }
    }
  }
}