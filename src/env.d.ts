/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** First-party/self-hosted analytics script URL. When unset, no analytics is emitted. */
  readonly ANALYTICS_SRC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}