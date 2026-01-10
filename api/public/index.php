<?php

declare(strict_types=1);

namespace Public;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config.php';

use Error;
use Exception;

use Core\Router;

// controllers
use App\Controllers\ProjectController;
use App\Controllers\LanguageController;
use App\Controllers\ProjectLanguageController;
use App\Controllers\AuthController;

// midlewares
use App\Middlewares\AuthMiddleware;

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

//Auth Routes
$router->post('auth/login', AuthController::class, 'login');
$router->post('auth/register', AuthController::class, 'register', [AuthMiddleware::class]);
$router->post('auth/refresh', AuthController::class, 'refresh');
$router->get('auth/me', AuthController::class, 'profile');

// Projects Routes
$router->get('projects', ProjectController::class, 'index');
$router->get('projects/{id}', ProjectController::class, 'show');
$router->post('projects', ProjectController::class, 'create', [AuthMiddleware::class]);
$router->put('projects/{id}', ProjectController::class, 'update', [AuthMiddleware::class]);
$router->delete('projects/{id}', ProjectController::class, 'delete', [AuthMiddleware::class]);

// Language routes
$router->get('languages', LanguageController::class, 'index');
$router->get('languages/{id}', LanguageController::class, 'show');
$router->post('languages', LanguageController::class, 'create', [AuthMiddleware::class]);
$router->put('languages/{id}', LanguageController::class, 'update', [AuthMiddleware::class]);
$router->delete('languages/{id}', LanguageController::class, 'delete', [AuthMiddleware::class]);

// Project Language routes
$router->get('projects/{projectId}/languages', ProjectLanguageController::class, 'getLanguagesByProjectId');
$router->post('projects/{projectId}/languages/{languageId}', ProjectLanguageController::class, 'attachLanguageToProject', [AuthMiddleware::class]);
$router->delete('projects/{projectId}/languages/{languageId}', ProjectLanguageController::class, 'detachLanguageFromProject', [AuthMiddleware::class]);

// Activity routes
$router->get('activity', \App\Controllers\ActivityController::class, 'index');
$router->post('activity', \App\Controllers\ActivityController::class, 'create', [AuthMiddleware::class]);
$router->delete('activity', \App\Controllers\ActivityController::class, 'reset', [AuthMiddleware::class]);

// Dispatch the request
try {
  $router->dispatch($request, $method);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Internal Server Error: ' . $e->getMessage()]);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Internal Server Error: ' . $e->getMessage()]);
}