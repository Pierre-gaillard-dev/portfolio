<?php

declare(strict_types=1);

namespace App\Entities;

class User
{
  private int $id;
  private string $name;
  private ?string $password;
  private string $created_at;
  private ?string $updated_at;

  public function __construct(int $id, string $name, ?string $password = null, string $created_at, ?string $updated_at = null)
  {
    $this->id = $id;
    $this->name = $name;
    $this->password = $password;
    $this->created_at = $created_at;
    $this->updated_at = $updated_at;
  }

  public function __get($name): mixed
  {
    return $this->$name;
  }
}