// Configuration de l'API
export const API_CONFIG = {
  // URL de base de votre API PHP
  BASE_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000" // Pour le développement local avec PHP
      : "https://pierre-gaillard.com/api", // Remplacez par votre vrai domaine

  // Endpoints
  ENDPOINTS: {
    ACTIVITY: "/activity.php",
  },
}

// Fonction helper pour construire les URLs
export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`
}
