<?php

declare(strict_types=1);

namespace Core;

class Response
{
  public static function json(mixed $data, int $statusCode = 200): void
  {
    header('Content-Type: application/json');
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
  }
}