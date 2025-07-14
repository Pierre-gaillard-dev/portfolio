<?php

class Model
{
  public static string $tableName = 'projects';

  public static array $fields = [
    'id' => 'int',
    'created_at' => 'datetime',
    'updated_at' => 'datetime'
  ];

  public static function init()
  {
    // check if table exists
    $pdo = Database::connect();
    try {
      $stmt = $pdo->query("SHOW TABLES LIKE 'projects'");
      if ($stmt === false || $stmt->rowCount() == 0) {
        // create table if it does not exist
        $pdo->exec("CREATE TABLE " . self::$tableName . " (" . self::createSqlTable() . ")");
      }
    } catch (PDOException $e) {
      echo "Error checking or creating table: " . $e->getMessage() . "\n";
      http_response_code(500);
      exit(json_encode(['error' => 'Database error']));
    }
  }

  public static function createSqlTable(): string
  {
    $fieldsSql = [];
    foreach (self::$fields as $field => $type) {
      switch ($type) {
        case 'int':
          $fieldsSql[] = "$field INT AUTO_INCREMENT PRIMARY KEY";
          break;
        case 'datetime':
          $fieldsSql[] = "$field DATETIME DEFAULT CURRENT_TIMESTAMP";
          break;
        // Add more types as needed
      }
    }
    return implode(", ", $fieldsSql);
  }

  public static function sanitize($data)
  {
    foreach (self::$fields as $field => $type) {
      if (isset($data[$field])) {
        switch ($type) {
          case 'int':
            $data[$field] = filter_var($data[$field], FILTER_SANITIZE_NUMBER_INT);
            break;
          case 'datetime':
            $data[$field] = date('Y-m-d H:i:s', strtotime($data[$field]));
            break;
          // Add more types as needed
        }
      }
    }
    return $data;
  }
}