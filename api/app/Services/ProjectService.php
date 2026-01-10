<?php

declare(strict_types=1);

namespace App\Services;

use App\Entities\Project;
use App\Repositories\ProjectRepository;

class ProjectService
{
  public static function getAll(bool $includeLanguages = false): array
  {
    $projects = ProjectRepository::getAll();
    if ($includeLanguages) {
      foreach ($projects as $project) {
        $project->getLanguages();
      }
    }
    return $projects;
  }

  public static function getById(int $id, bool $includeLanguages = false): ?Project
  {
    $project = ProjectRepository::findById($id);
    if ($includeLanguages && $project) {
      $project->getLanguages();
    }
    return $project;
  }

  public static function getBySlug(string $slug, bool $includeLanguages = false): ?Project
  {
    $project = ProjectRepository::findBySlug($slug);
    if ($includeLanguages && $project) {
      $project->getLanguages();
    }
    return $project;
  }

  public static function create(Project $project): Project
  {
    return ProjectRepository::create($project);
  }

  public static function update(Project $project): Project
  {
    $project->updateTimestamps(); // Update the updated_at timestamp
    return ProjectRepository::update($project);
  }

  public static function delete(int $id): bool
  {
    return ProjectRepository::delete($id);
  }
}