<?php

declare(strict_types=1);

namespace Public;

require_once __DIR__ . '/../vendor/autoload.php';

use Exception;

use Core\Router;
use App\Controllers\ProjectController;


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
$router->get('languages', \App\Controllers\LanguageController::class, 'index');
$router->get('languages/{id}', \App\Controllers\LanguageController::class, 'show');
$router->post('languages', \App\Controllers\LanguageController::class, 'create');
$router->put('languages/{id}', \App\Controllers\LanguageController::class, 'update');
$router->delete('languages/{id}', \App\Controllers\LanguageController::class, 'delete');

// Dispatch the request
try {
  $router->dispatch($request, $method);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Internal Server Error: ' . $e->getMessage()]);
}