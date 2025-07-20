<?php

declare(strict_types=1);

namespace App\Services;

use App\Entities\Project;
use App\Repositories\ProjectRepository;

class ProjectService
{
  public static function getAll(): array
  {
    return ProjectRepository::getAll();
  }

  public static function getById(int $id): ?Project
  {
    return ProjectRepository::findById($id);
  }

  public static function create(Project $project): Project
  {
    return ProjectRepository::create($project);
  }
}