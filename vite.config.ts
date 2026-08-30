import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],

  // Proxy Google Apps Script in dev to avoid CORS (browser → same origin → proxy → script.google.com)
  server: {
    proxy: {
      "/api/consultation": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: () =>
          "/macros/s/AKfycbyGHm1ONO8lMkyYC_z4l1QIt3ZWYx3Qx82vHjnuF9lXu275irxS6BT6_tYhLnCwGUF6/exec",
        // Don't forward cookies/authorization so Google treats this as anonymous (script must be deployed "Anyone, even anonymous")
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.removeHeader("cookie");
            proxyReq.removeHeader("authorization");
          });
        },
      },
    },
  },
});
