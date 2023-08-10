declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEFAULT_LANGUAGE: string,
      SUPPORTED_LANGUAGE: string,
      NODE_ENV: 'development'|'production',
      CONTACT_GITHUB: string,
      CONTACT_TELEGRAM: string,
    }
  }
}

export {}
