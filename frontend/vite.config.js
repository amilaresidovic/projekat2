import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "0.0.0.0",         
    port: 8080,
    strictPort: true,          
    watch: {
      usePolling: true,        
    },
    cors: true,                
    allowedHosts: "all",       
  },
  plugins: [react()],
});