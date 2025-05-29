import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
    host: "0.0.0.0",
    origin: "http://projekat2-alb-1593865384.us-east-1.elb.amazonaws.com",
    allowedHosts: [
      "projekat2-alb-1593865384.us-east-1.elb.amazonaws.com",
      "localhost",
      
    ],
  },
});