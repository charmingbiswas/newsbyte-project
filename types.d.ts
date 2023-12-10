// This file contains extending inbuilt type definitions for libraries used
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
    quinary: Palette['primary'];
    senary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    quaternary?: PaletteOptions['primary'];
    quinary?: PaletteOptions['primary'];
    senary?: PaletteOptions['primary'];
  }
}
