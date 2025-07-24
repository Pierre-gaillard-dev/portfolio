<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Entities\Language;
use App\Repositories\LanguageRepository;
use Core\Response;

class LanguageController
{
  public function index()
  {
    $languages = LanguageRepository::getAll();
    Response::json($languages);
  }

  public function show(int $id)
  {
    $language = LanguageRepository::findById($id);
    if (!$language) {
      Response::json(['error' => 'Language not found'], 404);
      return;
    }
    Response::json($language);
  }

  public function create()
  {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['name']) || !isset($data['slug'])) {
      Response::json(['error' => 'Invalid input'], 400);
      return;
    }

    $language = new Language(
      id: 0, // ID will be set by the database
      name: $data['name'],
      slug: $data['slug'],
      created_at: new \DateTime(),
      updated_at: new \DateTime()
    );

    $createdLanguage = LanguageRepository::create($language);
    Response::json($createdLanguage, 201);
  }

  public function update(int $id)
  {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!isset($data['name']) || !isset($data['slug'])) {
      Response::json(['error' => 'Invalid input'], 400);
      return;
    }

    $language = new Language(
      id: $id,
      name: $data['name'],
      slug: $data['slug'],
      created_at: new \DateTime(),
      updated_at: new \DateTime()
    );

    $updatedLanguage = LanguageRepository::update($language);
    Response::json($updatedLanguage);
  }

  public function delete(int $id)
  {
    $result = LanguageRepository::delete($id);
    if ($result) {
      Response::json(['message' => 'Language deleted successfully']);
    } else {
      Response::json(['error' => 'Language not found'], 404);
    }
  }
}