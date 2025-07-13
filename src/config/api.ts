// Configuration de l'API
export const API_CONFIG = {
  // URL de base de votre API PHP
  BASE_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000" // Pour le développement local avec PHP
      : "https://pierre-gaillard.mds-vannes.yt/api", // Remplacez par votre vrai domaine

  // Endpoints
  ENDPOINTS: {
    ACTIVITY: "/activity",
  },
}

// Fonction helper pour construire les URLs
export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`
}
