import type { StarlightPlugin } from '@astrojs/starlight/types'
import nordLight from './nord-light-theme'

export default function starlightThemeNord(): StarlightPlugin {
  return {
    name: 'starlight-theme-nord',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {
        logger.info('Hello from the starlight-theme-nord plugin!')

        // Respect user's choice to disable Expressive Code
        if (config.expressiveCode === false) {
          updateConfig({
            customCss: [...(config.customCss ?? []), 'starlight-theme-nord/styles'],
          })
          return
        }

        // Merge with any existing expressiveCode config
        const userEc = typeof config.expressiveCode === 'object' ? config.expressiveCode : {}

        updateConfig({
          customCss: [...(config.customCss ?? []), 'starlight-theme-nord/styles'],
          expressiveCode: {
            ...userEc,
            // Only set themes if user hasn't provided their own
            themes: userEc.themes ?? ['nord', nordLight],
            useStarlightUiThemeColors: userEc.useStarlightUiThemeColors ?? true,
          },
        })
      },
    },
  }
}
