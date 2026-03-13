import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Permet de réduire la taille de l'image Docker de 1Go à ~100Mo
};

export default nextConfig;
