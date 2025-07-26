<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Entities\Project;
use App\Services\ProjectService;
use Core\Response;

class ProjectController
{
  public function index()
  {
    $projects = ProjectService::getAll(includeLanguages: true);
    Response::json($projects);
  }

  public function show(int $id)
  {
    $project = ProjectService::getById($id, true);
    if (!$project) {
      Response::json(['error' => 'Project not found'], 404);
      return;
    }
    Response::json($project);
  }

  public function create()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data || !isset($data['title'])) {
      Response::json(['error' => 'Invalid input'], 400);
      return;
    }
    // Validate required fields
    $requiredFields = ['title', 'img', 'github', 'description', 'conditions', 'copyright'];
    foreach ($requiredFields as $field) {
      if (!isset($data[$field])) {
        Response::json(['error' => "Missing required field: $field"], 400);
        return;
      }
    }
    try {
      $project = new Project(
        id: 0, // Assuming ID is auto-incremented
        title: $data['title'],
        img: $data['img'],
        github: $data['github'],
        demo: $data['demo'] ?? null,
        is_playable_demo: $data['is_playable_demo'] ?? null,
        demo_height: $data['demo_height'] ?? null,
        demo_width: $data['demo_width'] ?? null,
        aspect_ratio: $data['aspect_ratio'] ?? null,
        video: $data['video'] ?? null,
        description: $data['description'],
        conditions: $data['conditions'],
        copyright: $data['copyright'],
        started_at: isset($data['started_at']) ? new \DateTime($data['started_at']) : null,
        finished_at: isset($data['finished_at']) ? new \DateTime($data['finished_at']) : null,
        duration: $data['duration'] ?? 0
      );

      $createdProject = ProjectService::create($project);
      Response::json($createdProject, 201);
    } catch (\Exception $e) {
      Response::json(['error' => 'Failed to create project', 'details' => $e->getMessage()], 500);
    }
  }

  public function update(int $id)
  {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data || !isset($data['title'])) {
      Response::json(['error' => 'Invalid input'], 400);
      return;
    }
    $project = ProjectService::getById($id);
    if (!$project) {
      Response::json(['error' => 'Project not found'], 404);
      return;
    }

    $started_at = null;
    if (isset($data['started_at'])) {
      try {
        $started_at = new \DateTime($data['started_at']);
      } catch (\Exception) {
        Response::json(['error' => 'Invalid started_at date format'], 400);
        return;
      }
    }

    $finished_at = null;
    if (isset($data['finished_at'])) {
      try {
        $finished_at = new \DateTime($data['finished_at']);
      } catch (\Exception) {
        Response::json(['error' => 'Invalid finished_at date format'], 400);
        return;
      }
    }

    $updatedProject = new Project(
      id: $project->id,
      title: $data['title'],
      img: $data['img'] ?? $project->img,
      github: $data['github'] ?? $project->github,
      demo: $data['demo'] ?? $project->demo,
      is_playable_demo: $data['is_playable_demo'] ?? $project->is_playable_demo,
      demo_height: $data['demo_height'] ?? $project->demo_height,
      demo_width: $data['demo_width'] ?? $project->demo_width,
      aspect_ratio: $data['aspect_ratio'] ?? $project->aspect_ratio,
      video: $data['video'] ?? $project->video,
      description: $data['description'] ?? $project->description,
      conditions: $data['conditions'] ?? $project->conditions,
      copyright: $data['copyright'] ?? $project->copyright,
      started_at: $started_at,
      finished_at: $finished_at,
      duration: $data['duration'] ?? $project->duration
    );
    $updatedProject->updateTimestamps(); // Update the updated_at timestamp
    $updatedProject = ProjectService::update($updatedProject);
    Response::json($updatedProject);
  }

  public function delete(int $id)
  {
    if (ProjectService::delete($id)) {
      Response::json(['message' => 'Project deleted successfully']);
    } else {
      Response::json(['error' => 'Failed to delete project'], 500);
    }
  }
}