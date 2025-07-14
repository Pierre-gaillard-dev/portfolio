<?php
require_once __DIR__ . '/../config/database.php';

class Model
{
  public static string $tableName = 'projects';

  public static array $fields = [
    'id' => "INT AUTO_INCREMENT PRIMARY KEY",
    'created_at' => "DATETIME DEFAULT CURRENT_TIMESTAMP",
    'updated_at' => "DATETIME NULL",
  ];

  public static function init()
  {
    // check if table exists
    $pdo = Database::connect();
    try {
      $stmt = $pdo->query("SHOW TABLES LIKE 'projects'");
      if ($stmt === false || $stmt->rowCount() == 0) {
        static::createSqlTable();
      }
      static::verifyFields(static::$fields);
    } catch (PDOException $e) {
      echo "Error checking or creating table: " . $e->getMessage() . "\n";
      http_response_code(500);
      exit(json_encode(['error' => 'Database error']));
    }
  }

  public static function createSqlTable(): void
  {
    $pdo = Database::connect();

    $fieldsSql = [];
    foreach (static::$fields as $field => $type) {
      $fieldsSql[] = "`$field` $type";
    }

    $fieldsString = implode(", ", $fieldsSql);
    $pdo->exec("CREATE TABLE " . static::$tableName . " (" . $fieldsString . ")");
  }

  public static function verifyFields(array $data): void
  {
    // check if the db table has all the fields
    $pdo = Database::connect();
    $stmt = $pdo->query("DESCRIBE " . static::$tableName);
    if ($stmt === false) {
      echo "Error describing table: " . $pdo->errorInfo()[2] . "\n";
      http_response_code(500);
      exit(json_encode(['error' => 'Database error']));
    }

    $existingFields = $stmt->fetchAll(PDO::FETCH_COLUMN);
    foreach (static::$fields as $field => $type) {
      if (!in_array($field, $existingFields)) {
        try {
          echo "Adding field $field of type $type\n";
          $pdo->exec("ALTER TABLE `" . static::$tableName . "` ADD `$field` " . $type);
        } catch (PDOException $e) {
          echo "Error adding field $field of type $type: " . $e->getMessage() . "\n";
          http_response_code(500);
          exit(json_encode(['error' => 'Database error']));
        }
      }
    }

    // check if the table has more fields than the model
    foreach ($existingFields as $field) {
      if (!array_key_exists($field, static::$fields)) {
        try {
          $pdo->exec("ALTER TABLE " . static::$tableName . " DROP COLUMN $field");
        } catch (PDOException $e) {
          echo "Error dropping column $field: " . $e->getMessage() . "\n";
          http_response_code(500);
          exit(json_encode(['error' => 'Database error']));
        }
      }
    }
    Database::disconnect();
  }

  public static function sanitize($data)
  {
    foreach (static::$fields as $field => $type) {
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