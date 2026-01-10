import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",

  // Désactiver l'optimisation d'images en mode static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes pour compatibilité hébergement static
  trailingSlash: true,

  // Build directory
  distDir: "build",
};

export default nextConfig;
