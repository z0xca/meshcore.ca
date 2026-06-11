// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";

// https://astro.build/config
export default defineConfig({
  site: "https://z0xca.github.io",
  base: "/meshcore.ca",
  integrations: [
    starlight({
      plugins: [starlightAutoSidebar()],
      title: "MeshCore Canada",
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/logo-large.png",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/MeshCore-ca/MeshCore-Canada/edit/main/",
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/BESFVMt7yk",
        },
        {
          icon: "discourse",
          label: "Discourse",
          href: "https://forum.meshcore.ca",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MeshCore-ca/MeshCore-Canada",
        },
      ],
      sidebar: [
        "getting-started",
        {
          label: "Analyser and MQTT",
          items: [{ autogenerate: { directory: "analyzer" } }],
        },
        {
          label: "Hardware",
          items: [{ autogenerate: { directory: "hardware" } }],
        },
        {
          label: "MeshCore",
          items: [{ autogenerate: { directory: "meshcore" } }],
        },
        {
          label: "Mesh Directory",
          items: [{ autogenerate: { directory: "provinces" } }],
        },
        {
          label: "Resources",
          items: [{ autogenerate: { directory: "resources" } }],
        },
        "contributing",
      ],
      lastUpdated: true,
    }),
  ],
});
