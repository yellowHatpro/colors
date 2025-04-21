export interface Theme {
  name: string;
  className: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    border: string;
    error: string;
  };
}

export const themes: Theme[] = [
  {
    name: "Gruvbox Light",
    className: "theme-gruvbox-light",
    colors: {
      primary: "#d65d0e",
      secondary: "#689d6a",
      background: "#fbf1c7",
      foreground: "#3c3836",
      accent: "#b16286",
      muted: "#ebdbb2",
      border: "#d5c4a1",
      error: "#cc241d",
    },
  },
  {
    name: "Gruvbox Dark",
    className: "theme-gruvbox-dark",
    colors: {
      primary: "#fe8019",
      secondary: "#b8bb26",
      background: "#282828",
      foreground: "#ebdbb2",
      accent: "#d3869b",
      muted: "#3c3836",
      border: "#504945",
      error: "#fb4934",
    },
  },
  {
    name: "Nord Light",
    className: "theme-nord-light",
    colors: {
      primary: "#5e81ac",
      secondary: "#a3be8c",
      background: "#eceff4",
      foreground: "#2e3440",
      accent: "#b48ead",
      muted: "#d8dee9",
      border: "#e5e9f0",
      error: "#bf616a",
    },
  },
  {
    name: "Nord Dark",
    className: "theme-nord-dark",
    colors: {
      primary: "#81a1c1",
      secondary: "#a3be8c",
      background: "#2e3440",
      foreground: "#eceff4",
      accent: "#b48ead",
      muted: "#434c5e",
      border: "#4c566a",
      error: "#bf616a",
    },
  },
  {
    name: "Catppuccin Light",
    className: "theme-catppuccin-light",
    colors: {
      primary: "#d20f39",
      secondary: "#40a02b",
      background: "#eff1f5",
      foreground: "#4c4f69",
      accent: "#8839ef",
      muted: "#ccd0da",
      border: "#bcc0cc",
      error: "#d20f39",
    },
  },
  {
    name: "Catppuccin Dark",
    className: "theme-catppuccin-dark",
    colors: {
      primary: "#f38ba8",
      secondary: "#a6e3a1",
      background: "#1e1e2e",
      foreground: "#cdd6f4",
      accent: "#cba6f7",
      muted: "#313244",
      border: "#45475a",
      error: "#f38ba8",
    },
  },
  {
    name: "Monokai Light",
    className: "theme-monokai-light",
    colors: {
      primary: "#f92672",
      secondary: "#a6e22e",
      background: "#f8f8f2",
      foreground: "#272822",
      accent: "#66d9ef",
      muted: "#eaeaea",
      border: "#cccccc",
      error: "#f92672",
    },
  },
  {
    name: "Monokai Dark",
    className: "theme-monokai-dark",
    colors: {
      primary: "#f92672",
      secondary: "#a6e22e",
      background: "#272822",
      foreground: "#f8f8f2",
      accent: "#66d9ef",
      muted: "#3e3d32",
      border: "#75715e",
      error: "#f92672",
    },
  },
  {
    name: "Pine Dark",
    className: "theme-pine-dark",
    colors: {
      primary: "#9ccfd8",
      secondary: "#31748f",
      background: "#232136",
      foreground: "#e0def4",
      accent: "#c4a7e7",
      muted: "#393552",
      border: "#44415a",
      error: "#eb6f92",
    },
  },
  {
    name: "Rose Pine Light",
    className: "theme-rosepine-light",
    colors: {
      primary: "#b4637a",
      secondary: "#286983",
      background: "#faf4ed",
      foreground: "#575279",
      accent: "#d7827e",
      muted: "#dfdad9",
      border: "#cecacd",
      error: "#b4637a",
    },
  },
];
