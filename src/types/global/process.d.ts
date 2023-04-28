declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_DEFAULT_LANGUAGE: string
    }
  }
}

export {}
