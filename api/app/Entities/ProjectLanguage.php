<?php

declare(strict_types=1);

namespace App\Entities;

class ProjectLanguage
{
  private int $id;
  private int $language_id;
  private int $project_id;
  private string $created_at;
  private string $updated_at;

  public function __construct(int $id, int $language_id, int $project_id, string $created_at, string $updated_at)
  {
    $this->id = $id;
    $this->language_id = $language_id;
    $this->project_id = $project_id;
    $this->created_at = $created_at;
    $this->updated_at = $updated_at;
  }

  public function __get($name)
  {
    return $this->$name;
  }

  public function toArray(): array
  {
    return [
      'id' => $this->id,
      'language_id' => $this->language_id,
      'project_id' => $this->project_id,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }

  public function jsonSerialize(): array
  {
    return $this->toArray();
  }

  public function __toString(): string
  {
    return json_encode($this->toArray());
  }

  public function updateTimestamps(): void
  {
    $this->updated_at = (new \DateTime())->format('Y-m-d H:i:s');
  }
}