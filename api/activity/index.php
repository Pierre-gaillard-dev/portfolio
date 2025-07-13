<?php
// Configuration CORS pour permettre les requêtes depuis votre site
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Gérer les requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Fichier pour stocker les données d'activité
$dataFile = __DIR__ . '/data/activity.json';

// Assurer que le dossier data existe
if (!is_dir(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}

// Structure par défaut des données d'activité
$defaultActivity = [
    'projectName' => '',
    'fileName' => '',
    'timeStamp' => null
];

// Fonction pour lire les données d'activité
function readActivity($dataFile, $defaultActivity) {
    if (file_exists($dataFile)) {
        $data = json_decode(file_get_contents($dataFile), true);
        return $data ? $data : $defaultActivity;
    }
    return $defaultActivity;
}

// Fonction pour écrire les données d'activité
function writeActivity($dataFile, $activity) {
    return file_put_contents($dataFile, json_encode($activity, JSON_PRETTY_PRINT));
}

// Traitement des requêtes
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Lire et retourner l'activité actuelle
        $activity = readActivity($dataFile, $defaultActivity);
        echo json_encode($activity);
        break;
        
    case 'POST':
        // Lire les données POST
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Vérifier si c'est une requête de reset (body vide)
        if (empty($input) || empty($input['projectName'])) {
            // Reset de l'activité
            $activity = $defaultActivity;
            writeActivity($dataFile, $activity);
            echo json_encode(['success' => true]);
            break;
        }
        
        // Valider les données
        $projectName = isset($input['projectName']) ? trim($input['projectName']) : '';
        $fileName = isset($input['fileName']) ? trim($input['fileName']) : '';
        
        if (empty($projectName)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'projectName is required']);
            break;
        }
        
        // Lire l'activité actuelle pour préserver le timestamp si c'est le même projet
        $currentActivity = readActivity($dataFile, $defaultActivity);
        
        // Créer la nouvelle activité
        $newActivity = [
            'projectName' => $projectName,
            'fileName' => $fileName,
            'timeStamp' => ($currentActivity['projectName'] === $projectName) 
                ? $currentActivity['timeStamp'] 
                : date('c') // Format ISO 8601
        ];
        
        // Sauvegarder
        if (writeActivity($dataFile, $newActivity)) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Failed to save activity']);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>
