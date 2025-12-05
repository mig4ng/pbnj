/**
 * pbnj configuration
 * @see https://github.com/bhavnicksm/pbnj
 */
export default {
  // Site name shown in title
  name: "Carneiro's Paste Bin",

  // Path to logo image
  logo: "/logo.png",

  // How paste IDs are generated: 'sandwich' | 'short' | 'uuid'
  idStyle: "short",

  // Show public paste listing on homepage
  homepage: false,

  // Sort order for pastes on homepage: 'newest' | 'oldest'
  sortOrder: "oldest",

  // Maximum paste size (e.g., '1mb', '500kb')
  maxPasteSize: "1mb",

  // Theme preset - controls syntax highlighting and UI colors
  // Available themes:
  //   Light: 'flexoki-light' (default), 'github-light', 'gruvbox-light', 'catppuccin-latte'
  //   Dark: 'flexoki-dark', 'github-dark', 'nord', 'gruvbox-dark', 'dracula',
  //         'catppuccin-frappe', 'catppuccin-macchiato', 'catppuccin-mocha'
  theme: "github-light",

  // Footer configuration (optional)
  footer: {
    text: "code by pbnj 🥪",
    link: "https://github.com/bhavnicksm/pbnj",
  },
};
