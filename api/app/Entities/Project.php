<?php

declare(strict_types=1);

namespace App\Entities;
use App\Repositories\ProjectLanguageRepository;

class Project implements \JsonSerializable
{
  private ?array $languages = null;

  public function __construct(
    private int $id,
    string $slug,
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
    $this->slug = $slug ?: strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
  }

  public function getLanguages(): array
  {
    if ($this->languages === null) {
      $this->languages = ProjectLanguageRepository::findLanguagesByProjectId($this->id);
    }
    return $this->languages;
  }

  public function __get($name)
  {
    return $this->$name;
  }

  public function toArray(): array
  {
    return [
      'id' => $this->id,
      'slug' => $this->slug,
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
      'languages' => $this->languages ? array_map(fn($lang) => $lang->toArray(), $this->languages) : null,
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

  public function updateTimestamps(): void
  {
    $this->updated_at = new \DateTime();
  }

}