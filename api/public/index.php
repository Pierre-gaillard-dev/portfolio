<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/env.php';
require_once __DIR__ . '/../config/router.php';
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

$router = new Router();

// Define your routes with middleware
$router->get('projects', 'ProjectController', 'index');
$router->get('projects/{id}', 'ProjectController', 'show');
$router->post('projects', 'ProjectController', 'create');
$router->put('projects/{id}', 'ProjectController', 'edit');
$router->delete('projects/{id}', 'ProjectController', 'delete');

// Dispatch the request
try {
  $router->dispatch($request, $method);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Internal Server Error: ' . $e->getMessage()]);
}