<?php
require_once __DIR__ . '/../controllers/ProjectController.php';

class Router
{
  private $routes = [];
  private $middlewares = [];

  public function addRoute($method, $pattern, $controller, $action, $middlewares = [])
  {
    $this->routes[] = [
      'method' => strtoupper($method),
      'pattern' => $pattern,
      'controller' => $controller,
      'action' => $action,
      'middlewares' => $middlewares
    ];
  }

  public function get($pattern, $controller, $action, $middlewares = [])
  {
    $this->addRoute('GET', $pattern, $controller, $action, $middlewares);
  }

  public function post($pattern, $controller, $action, $middlewares = [])
  {
    $this->addRoute('POST', $pattern, $controller, $action, $middlewares);
  }

  public function put($pattern, $controller, $action, $middlewares = [])
  {
    $this->addRoute('PUT', $pattern, $controller, $action, $middlewares);
  }

  public function delete($pattern, $controller, $action, $middlewares = [])
  {
    $this->addRoute('DELETE', $pattern, $controller, $action, $middlewares);
  }

  public function dispatch($request, $method)
  {
    foreach ($this->routes as $route) {
      if ($route['method'] !== $method) {
        continue;
      }

      $pattern = str_replace('/', '\/', $route['pattern']);
      $pattern = preg_replace('/\{(\w+)\}/', '(\d+)', $pattern);
      $pattern = "/^{$pattern}$/";

      if (preg_match($pattern, $request, $matches)) {
        // Run middlewares
        foreach ($route['middlewares'] as $middleware) {
          $middlewareInstance = new $middleware();
          if (!$middlewareInstance->handle()) {
            return;
          }
        }

        // Extract parameters
        $params = array_slice($matches, 1);

        // Instantiate controller and call action
        $controllerClass = $route['controller'];
        $controller = new $controllerClass();
        $action = $route['action'];

        call_user_func_array([$controller, $action], $params);
        return;
      }
    }

    // No route found
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
  }
}
