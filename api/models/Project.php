<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/Model.php';

class Project extends Model
{
  public static array $fields = [
    'id' => "INT AUTO_INCREMENT PRIMARY KEY",
    'title' => "VARCHAR(255) NOT NULL",
    'img' => "VARCHAR(255) NOT NULL",
    'github' => "VARCHAR(255) NOT NULL",
    'demo' => "VARCHAR(255) NULL",
    'playable_demo' => "VARCHAR(255) NULL",
    'demo_height' => "INT NULL",
    'demo_width' => "INT NULL",
    'aspect_ratio' => "FLOAT NULL",
    'video' => "VARCHAR(255) NULL",
    'description' => "TEXT NOT NULL",
    'conditions' => "VARCHAR(255) NOT NULL",
    'copyright' => "VARCHAR(255) NOT NULL",
    'started_at' => "DATETIME NULL",
    'finished_at' => "DATETIME NULL",
    'duration' => "INT NULL",
    'created_at' => "DATETIME DEFAULT CURRENT_TIMESTAMP",
    'updated_at' => "DATETIME NULL",
  ];

  public static function getAll()
  {
    $pdo = Database::connect();
    $stmt = $pdo->query("SELECT * FROM projects");
    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);
    Database::disconnect();
    return $projects;
  }

  public static function get($id)
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    $project = $stmt->fetch(PDO::FETCH_ASSOC);
    Database::disconnect();
    return $project;
  }

  public static function create($data)
  {
    $pdo = Database::connect();
    $sanitizedData = static::sanitize($data);
    $fields = implode(", ", array_keys($sanitizedData));
    $placeholders = implode(", ", array_fill(0, count($sanitizedData), '?'));
    $stmt = $pdo->prepare("INSERT INTO projects ($fields) VALUES ($placeholders)");
    $stmt->execute(array_values($sanitizedData));
    $sanitizedData['id'] = $pdo->lastInsertId();
    Database::disconnect();
    return $sanitizedData;
  }

  public static function update($id, $data)
  {
    $pdo = Database::connect();
    $sanitizedData = static::sanitize($data);
    $fields = [];
    foreach ($sanitizedData as $field => $value) {
      $fields[] = "$field = ?";
    }
    $fieldsString = implode(", ", $fields);
    $stmt = $pdo->prepare("UPDATE projects SET $fieldsString WHERE id = ?");
    $sanitizedData['id'] = $id;
    $stmt->execute(array_values($sanitizedData));
    Database::disconnect();
    return $sanitizedData;
  }

  public static function delete($id)
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    Database::disconnect();
    return $stmt->rowCount() > 0;
  }
}
