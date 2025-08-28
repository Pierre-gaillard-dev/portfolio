<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Services\ProjectLanguageService;
use App\Entities\ProjectLanguage;
use Core\Response;

class ProjectLanguageController
{
  public function getLanguagesByProjectId(string $projectId)
  {
    // Ensure the parameter is an integer
    try {
      $projectId = (int) $projectId;
      if ($projectId <= 0) {
        throw new \InvalidArgumentException('Invalid project ID');
      }
    } catch (\InvalidArgumentException $e) {
      Response::json(['error' => 'Invalid project ID'], 400);
      return;
    }
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

  public function attachLanguageToProject(string $projectId, string $languageId)
  {
    // Ensure the parameters are integers
    try {
      $projectId = (int) $projectId;
      $languageId = (int) $languageId;
      if ($projectId <= 0 || $languageId <= 0) {
        throw new \InvalidArgumentException('Invalid project or language ID');
      }
    } catch (\InvalidArgumentException $e) {
      Response::json(['error' => 'Invalid parameters'], 400);
      return;
    }

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

  public function detachLanguageFromProject(string $projectId, string $languageId)
  {
    // Ensure the parameters are integers
    try {
      $projectId = (int) $projectId;
      $languageId = (int) $languageId;
      if ($projectId <= 0 || $languageId <= 0) {
        throw new \InvalidArgumentException('Invalid project or language ID');
      }
    } catch (\InvalidArgumentException $e) {
      Response::json(['error' => 'Invalid parameters'], 400);
      return;
    }
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