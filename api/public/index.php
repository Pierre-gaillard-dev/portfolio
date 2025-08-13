<?php

declare(strict_types=1);

namespace Public;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config.php';

use Exception;

use Core\Router;
use App\Controllers\ProjectController;
use App\Controllers\LanguageController;
use App\Controllers\ProjectLanguageController;


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
$router->get('projects', ProjectController::class, 'index');
$router->get('projects/{id}', ProjectController::class, 'show');
$router->post('projects', ProjectController::class, 'create');
$router->put('projects/{id}', ProjectController::class, 'update');
$router->delete('projects/{id}', ProjectController::class, 'delete');

// Language routes
$router->get('languages', LanguageController::class, 'index');
$router->get('languages/{id}', LanguageController::class, 'show');
$router->post('languages', LanguageController::class, 'create');
$router->put('languages/{id}', LanguageController::class, 'update');
$router->delete('languages/{id}', LanguageController::class, 'delete');

// Project Language routes
$router->get('projects/{projectId}/languages', ProjectLanguageController::class, 'getLanguagesByProjectId');
$router->post('projects/{projectId}/languages/{languageId}', ProjectLanguageController::class, 'attachLanguageToProject');
$router->delete('projects/{projectId}/languages/{languageId}', ProjectLanguageController::class, 'detachLanguageFromProject');

// Activity routes
$router->get('activity', \App\Controllers\ActivityController::class, 'index');
$router->post('activity', \App\Controllers\ActivityController::class, 'create');
$router->delete('activity', \App\Controllers\ActivityController::class, 'reset');

// Dispatch the request
try {
  $router->dispatch($request, $method);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Internal Server Error: ' . $e->getMessage()]);
}