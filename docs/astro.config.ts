import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeNord from 'starlight-theme-nord'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/kazettique/starlight-theme-nord/edit/main/docs/',
      },
      plugins: [starlightThemeNord()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        { label: 'Examples', autogenerate: { directory: 'examples' } },
      ],
      social: [
        { href: 'https://github.com/kazettique/starlight-theme-nord', icon: 'github', label: 'GitHub' },
      ],
      title: 'starlight-theme-nord',
    }),
  ],
})
