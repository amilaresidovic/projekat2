import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const allowedHost = process.env.ALLOWED_HOST || "";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: [
      allowedHost, 
      "localhost",
      "127.0.0.1",
    ],
  },
});