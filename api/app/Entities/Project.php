<?php

declare(strict_types=1);

namespace App\Entities;

class Project implements \JsonSerializable
{
  public function __construct(
    private int $id,
    private string $title,
    private string $img,
    private string $github,
    private string|null $demo,
    private string|null $is_playable_demo,
    private int|null $demo_height,
    private int|null $demo_width,
    private float|null $aspect_ratio,
    private string|null $video,
    private string $description,
    private string $conditions,
    private string $copyright,
    private \DateTime|null $started_at,
    private \DateTime|null $finished_at,
    private int|null $duration,
    private \DateTime $created_at = new \DateTime(),
    private \DateTime|null $updated_at = null
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
      'title' => $this->title,
      'img' => $this->img,
      'github' => $this->github,
      'demo' => $this->demo,
      'is_playable_demo' => $this->is_playable_demo,
      'demo_height' => $this->demo_height,
      'demo_width' => $this->demo_width,
      'aspect_ratio' => $this->aspect_ratio,
      'video' => $this->video,
      'description' => $this->description,
      'conditions' => $this->conditions,
      'copyright' => $this->copyright,
      'started_at' => $this->started_at ? $this->started_at->format('Y-m-d H:i:s') : null,
      'finished_at' => $this->finished_at ? $this->finished_at->format('Y-m-d H:i:s') : null,
      'duration' => $this->duration,
      'created_at' => $this->created_at->format('Y-m-d H:i:s'),
      'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d H:i:s') : null,
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

}