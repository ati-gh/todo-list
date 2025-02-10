import { ReactNode } from "react";

import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Color,
} from "@mui/material/styles";
import { shadows } from "./shadows";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    blue: Palette["primary"];
    yellow: Palette["primary"];
    green: Palette["primary"];
    orange: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }

  interface PaletteColor extends Color {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  }
}

let theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#517FF6", //main
      dark: "#005B66", //hover
      "100": "#2A9BA8", //primary-01
      "200": "#79BEC6", //primary-02
      "300": "#BFD5D8", //primary-03
      "400": "#EAF7F7", //primary-04
      "500": "#F2FAFA",
    },
    secondary: {
      main: "#F86534", //main
      dark: "#DB4411", //hover
      "100": "#FF8056", //01
      "200": "#FFDACD", //02
      "300": "#FFF3EF", //03
    },
    error: {
      main: "#E14856", //main
      "100": "#F8DEE1",
    },
    success: {
      main: "#1CAE81", //main
      "100": "#CEEED6", //01
      "200": "#EBF7EE", //02
    },
    grey: {
      "100": "#B6B6B6", //gray 01-B6
      "200": "#D1D1D1", //gray 02-D1
      "300": "#EDEDED", //gray 03-ED
      "400": "#EFEFEF", //gray 04-EF
      "500": "#F4F4F4", //gray 05-F4
      "600": "#F9F9F9", //gray 06-F9
      "700": "#F6F6FB",
      "800": "#E8E8E8",
      "900": "#646464",
    },
    black: {
      "300": "#303030", //black 30
      "500": "#505050", //black 50
      "700": "#707070", //black 70
      "900": "#909090", //black 90
    },
    white: {
      "100": "#ffffff",
    },
    blue: {
      main: "#007CC1",
      "100": "#DBE4FF",
      "200": "#EDF9FF",
      "300": "#5F7CCC",
    },
    yellow: {
      "100": "#FFF7D8",
      "200": "#D6A901",
      "300": "#DCAD23",
    },
  },
  typography: {
    fontFamily: "IranYekan, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (t) => ({
        "*": {
          "&::-webkit-scrollbar": {
            width: "0.5rem",
            height: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {
            background: t.palette.grey[500],
            borderRadius: "24px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: t.palette.grey[100],
            borderRadius: "5px",
          },
        },
      }),
    },
  },
});

theme = createTheme(theme, {
  shadows: shadows(theme),
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
