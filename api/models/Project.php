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
}
