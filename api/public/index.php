<?php
require_once __DIR__ . '/../controllers/ProjectController.php';

// Parse the URL path
$requestUri = $_SERVER['REQUEST_URI'];
$parsedUrl = parse_url($requestUri);
$path = $parsedUrl['path'] ?? '';

// Remove leading slash and extract the route
$request = ltrim($path, '/');

// Remove 'api/' prefix if present
if (strpos($request, 'api/') === 0) {
  $request = substr($request, 4); // Remove 'api/' (4 characters)
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== "GET") {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

switch ($request) {
  case 'projects':
    $controller = new ProjectController();
    $controller->index();
    break;
  default:
    if (preg_match('/^projects\/(\d+)$/', $request, $matches)) {
      $controller = new ProjectController();
      $controller->show($matches[1]);
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'Not found']);
    }
    break;
}