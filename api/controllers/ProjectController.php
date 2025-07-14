<?php
require_once __DIR__ . '/../models/Project.php';

class ProjectController
{
  public function __construct()
  {
    Project::init(); // Ensure the model is initialized
  }

  public function index()
  {
    Project::init(); // Assurez-vous que le modèle est initialisé
    $projects = Project::getAll();
    header('Content-Type: application/json');
    echo json_encode($projects);
    // http_response_code(200);
  }

  public function show($id)
  {
    Project::init(); // Assurez-vous que le modèle est initialisé
    $project = Project::get($id);
    if ($project) {
      header('Content-Type: application/json');
      echo json_encode($project);
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'Project not found']);
    }
  }

  public function create()
  {
    Project::init(); // Assurez-vous que le modèle est initialisé
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) {
      http_response_code(400);
      echo json_encode(['error' => 'Invalid input']);
      return;
    }

    $project = Project::create($data);
    header('Content-Type: application/json');
    echo json_encode($project);
  }

  public function edit($id)
  {
    Project::init(); // Assurez-vous que le modèle est initialisé
    $project = Project::get($id);
    if ($project) {
      header('Content-Type: application/json');
      echo json_encode($project);
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'Project not found']);
    }
  }

  public function delete($id)
  {
    Project::init(); // Assurez-vous que le modèle est initialisé
    $project = Project::get($id);
    if ($project) {
      Project::delete($id);
      http_response_code(204); // No content
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'Project not found']);
    }
  }
}