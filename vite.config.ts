import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The "Download CV" buttons only render when the PDF is actually there.
const cv = {
  en: existsSync("public/cv/Erick-Passetti-CV-EN.pdf"),
  pt: existsSync("public/cv/Erick-Passetti-CV-PT.pdf"),
};

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // GitHub Pages serves the site from /erick-portfolio/.
  base: command === "build" || isPreview ? "/erick-portfolio/" : "/",
  define: {
    __CV__: JSON.stringify(cv),
  },
  ssr: {
    // Bundled into the prerender build so Node doesn't resolve its CJS entry.
    noExternal: ["lucide-react"],
  },
}));
