<?php

declare(strict_types=1);

namespace App\Entities;

class Language implements \JsonSerializable
{
  public function __construct(
    private int $id,
    private string $name,
    private string $slug,
    private \DateTime $created_at,
    private \DateTime $updated_at,
  ) {
  }

  public function __get($name)
  {
    return $this->$name;
  }

  public function toArray(): array
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'slug' => $this->slug,
      'created_at' => $this->created_at->format('Y-m-d H:i:s'),
      'updated_at' => $this->updated_at?->format('Y-m-d H:i:s') ?: null,
    ];
  }

  public function jsonSerialize(): array
  {
    return $this->toArray();
  }

  public function __tostring()
  {
    return json_encode($this->toArray());
  }

  public function updateTimestamps(): void
  {
    $this->updated_at = new \DateTime();
  }

}