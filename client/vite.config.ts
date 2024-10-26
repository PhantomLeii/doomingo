import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  root: "app",

  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
      },
    },
  },
});
