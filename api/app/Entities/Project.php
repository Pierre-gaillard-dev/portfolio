<?php

declare(strict_types=1);

namespace App\Entities;

class Project
{
  public function __construct(
    private int $id,
    private string $title,
    private string $img,
    private string $github,
    private string|null $demo,
    private string|null $playable_demo,
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
}