interface GabsChatConfig {
  botId?: string
  apiKey?: string
  // Add other configuration options based on Gabs Chat documentation
}

interface GabsChatAPI {
  init: (config: GabsChatConfig) => void
  // Add other methods based on Gabs Chat documentation
}

declare global {
  interface Window {
    GabsChat?: GabsChatAPI
  }
}

export {}
