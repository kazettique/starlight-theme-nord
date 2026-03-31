import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeNord from "starlight-theme-nord";

export default defineConfig({
  site: 'https://kazettique.github.io',
  base: '/starlight-theme-nord',
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/kazettique/starlight-theme-nord/edit/main/docs/",
      },
      plugins: [starlightThemeNord()],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "customization"],
        },
        { label: "Examples", autogenerate: { directory: "examples" } },
      ],
      social: [{ href: "https://github.com/kazettique/starlight-theme-nord", icon: "github", label: "GitHub" }],
      title: "starlight-theme-nord",
      customCss: ["./src/styles/custom.css"],
      favicon: "./src/assets/favicon/favicon-32x32.png",
    }),
  ],
});
