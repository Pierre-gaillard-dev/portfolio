<?php

declare(strict_types=1);

namespace Core;

use Core\Response;

class Router
{
  private $routes = [];
  private $middlewares = [];

  public function addRoute($method, $pattern, $controller, $action, $middlewares = [])
  {
    // Normalize pattern
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
    if (substr($request, -1) === '/') {
      $request = rtrim($request, '/'); // Remove trailing slash
    }

    foreach ($this->routes as $route) {
      if ($route['method'] !== $method) {
        continue;
      }

      // Normalize the pattern
      $pattern = str_replace('/', '\/', $route['pattern']);
      $pattern = preg_replace('/\{(\w+)\}/', '([a-zA-Z0-9_-]+)', $pattern);
      $pattern = "/^{$pattern}$/";

      if (preg_match($pattern, $request, $matches)) {
        // Run middlewares
        foreach ($route['middlewares'] as $middleware) {
          if (!class_exists($middleware)) {
            Response::json(['error' => "Middleware class not found: {$middleware}"], 500);
            return;
          }
          $middlewareInstance = new $middleware();
          if (!$middlewareInstance->handle()) {
            return;
          }
        }

        // Extract parameters
        $params = array_slice($matches, 1);

        // Instantiate controller and call action
        $controllerClass = $route['controller'];
        $action = $route['action'];

        if (!class_exists($controllerClass)) {
          Response::json(['error' => 'Controller not found'], 500);
          return;
        }

        $controller = new $controllerClass();
        if (!method_exists($controller, $action)) {
          Response::json(['error' => 'Action not found'], 500);
          return;
        }

        call_user_func_array([$controller, $action], $params);
        return; // Exit after handling the request
      }
    }

    // No route found
    Response::json(['error' => 'Not found'], 404);
  }
}
