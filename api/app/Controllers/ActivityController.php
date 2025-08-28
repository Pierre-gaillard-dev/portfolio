<?php

declare(strict_types=1);

namespace App\Controllers;

use Core\Response;

class ActivityController
{

  private string $dataFile = __DIR__ . '/../../data/activity.json';

  private array $defaultActivity = [
    'projectName' => null,
    'fileName' => null,
    'timeStamp' => null
  ];

  public function index()
  {
    if (file_exists($this->dataFile)) {
      $data = json_decode(file_get_contents($this->dataFile), true);
      if ($data) {
        Response::json($data);
        return;
      }
    }
    Response::json($this->defaultActivity);
  }

  public function create()
  {
    $activity = json_decode(file_get_contents('php://input'), true);
    if ($activity) {
      if (!isset($activity['projectName']) || !isset($activity['fileName'])) {
        Response::json(['error' => 'Invalid input'], 400);
        return;
      }

      // keep the timestamp if activity already exists
      if (file_exists($this->dataFile)) {
        $existing = json_decode(file_get_contents($this->dataFile), true);
        if (isset($existing['timeStamp'])) {
          $activity['timeStamp'] = $existing['timeStamp'];
        }
      }

      if (empty($activity['timeStamp'])) {
        $activity['timeStamp'] = date('Y-m-d H:i:s');
      }

      file_put_contents($this->dataFile, json_encode($activity, JSON_PRETTY_PRINT));
      Response::json($activity);
      return;
    }
    Response::json($this->defaultActivity);
  }

  public function reset()
  {
    file_put_contents($this->dataFile, json_encode($this->defaultActivity, JSON_PRETTY_PRINT));
    Response::json(['success' => true]);
  }
}