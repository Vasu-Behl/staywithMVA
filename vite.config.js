import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Remove the GitHub Pages base – Vercel serves from "/"
  // base: "/staywithMVA/",
});
