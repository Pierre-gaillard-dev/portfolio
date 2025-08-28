<?php

declare(strict_types=1);

namespace App\Services;

use App\Entities\Language;
use App\Repositories\LanguageRepository;

class LanguageService
{
  public function getAllLanguages(): array
  {
    return LanguageRepository::getAll();
  }

  public function findLanguageById(int $id): ?Language
  {
    return LanguageRepository::findById($id);
  }

  public function createLanguage(Language $language): Language
  {
    // Assuming there's a method in the repository to handle creation
    return LanguageRepository::create($language);
  }

  public function updateLanguage(Language $language): Language
  {
    // Assuming there's a method in the repository to handle updates
    return LanguageRepository::update($language);
  }

  public function deleteLanguage(int $id): bool
  {
    // Assuming there's a method in the repository to handle deletion
    return LanguageRepository::delete($id);
  }
}