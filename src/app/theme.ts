import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  preflight: true, //apply css reset
  strictTokens: false,

  globalCss: {
    html: {
      height: "100%",
    },
    body: {
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--chakra-colors-background)",
      color: "black",
    },
    "#__next": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: "#B22222" },
        secondary: { value: "#3B5323" },
        tertiary: { value: "#323237" },
        foreground: { value: "#F9F9F9" },
        background: { value: "#FFFFFF" },
      },
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
        heading: { value: "Inter, system-ui, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
