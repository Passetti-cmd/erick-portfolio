/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


/** Which CV PDFs exist in public/cv at build time (set in vite.config.ts). */
declare const __CV__: { en: boolean; pt: boolean };
