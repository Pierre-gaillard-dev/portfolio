<?php
require_once __DIR__ . '/env.php';

class Database
{
  private static PDO|null $pdo;

  public static function connect(): PDO
  {
    if (!isset(self::$pdo)) {
      Env::load();

      $host = getenv('DB_HOST');
      $dbName = getenv('DB_NAME');
      $port = getenv('DB_PORT') ?: '3306'; // Default to 3306 if not set
      $user = getenv('DB_USER');
      $pass = getenv('DB_PASS');
      if ($port) {
        $host .= ':' . $port; // Append port if specified
      }
      if (!$host || !$dbName || !$user || !$pass) {
        echo "Database configuration is not set properly in .env file. | ";
        http_response_code(500);
        exit(json_encode(['error' => 'Database configuration error']));
      }

      try {
        self::$pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $pass, [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
        return self::$pdo;
      } catch (PDOException $e) {
        echo "Database connection failed: " . $e->getMessage() . " | ";
        http_response_code(500);
        exit(json_encode(['error' => 'Database connection error']));
      }
    } else {
      return self::$pdo;
    }
  }

  public static function disconnect()
  {
    self::$pdo = null;
  }
}
?>