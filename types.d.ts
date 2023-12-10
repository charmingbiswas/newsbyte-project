// This file contains extending inbuilt type definitions for libraries used
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    iconBackground: Palette['primary'];
  }

  interface PaletteOptions {
    iconBackground?: PaletteOptions['primary'];
  }
}
