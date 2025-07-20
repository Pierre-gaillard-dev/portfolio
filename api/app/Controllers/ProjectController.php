<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Services\ProjectService;
use Core\Response;

class ProjectController
{
  public function index()
  {
    $projects = ProjectService::getAll();
    Response::json($projects);
  }

  public function show(int $id)
  {
    $project = ProjectService::getById($id);
    if (!$project) {
      Response::json(['error' => 'Project not found'], 404);
      return;
    }
    Response::json($project);
  }
}