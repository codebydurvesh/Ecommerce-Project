import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ecommerce-project-backend-n78t.onrender.com",
      },
      "/images": {
        target: "https://ecommerce-project-backend-n78t.onrender.com",
      },
    },
  },
});
