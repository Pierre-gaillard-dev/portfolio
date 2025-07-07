<?php
// Configuration générale de l'API
define('API_VERSION', '1.0');
define('API_BASE_URL', 'https://pierre-gaillard.com/api/'); // Remplacez par votre domaine

// Configuration CORS pour production
define('CORS_ORIGINS', [
    'http://localhost:3000',  // Développement local
    'http://localhost:5173',  // Développement Vite
    'https://pierre-gaillard.com',  // Production - remplacez par votre domaine
    'https://www.pierre-gaillard.com',  // Production avec www
    'https://pierre-gaillard.netlify.app',  // Si vous utilisez Netlify
    'https://pierre-gaillard.vercel.app'   // Si vous utilisez Vercel
]);

// Configuration pour la production
define('IS_PRODUCTION', $_SERVER['HTTP_HOST'] !== 'localhost');

// Fonction pour configurer CORS
function setupCORS() {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    
    if (in_array($origin, CORS_ORIGINS)) {
        header("Access-Control-Allow-Origin: $origin");
    } else {
        // En développement, autoriser toutes les origines
        if (!IS_PRODUCTION) {
            header("Access-Control-Allow-Origin: *");
        }
    }
    
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");
}

// Fonction pour répondre en JSON
function jsonResponse($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

// Fonction pour gérer les erreurs
function errorResponse($message, $status = 400) {
    jsonResponse(['error' => $message, 'success' => false], $status);
}

// Fonction pour logger les erreurs en production
function logError($message, $context = []) {
    if (IS_PRODUCTION) {
        error_log("API Error: $message " . json_encode($context));
    }
}
?>
