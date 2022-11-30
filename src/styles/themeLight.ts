import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#385AD2',
      light:"#4579DD",
      dark:"#1F42BD",
    },
    secondary: {
      main: '#7115CD',
      light:"#CDADEE",
      dark:"#9C27B0",
    },
    success: {
      main: '#29AF7D',
      light:"#50BC93",
      dark:"#0F864D",
      contrastText:"#fff"
    },
    warning: {
      main: '#F9B635',
      light:"#FAC153",
      dark:"#F58E16",
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

