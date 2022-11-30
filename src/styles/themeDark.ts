import { createTheme } from "@mui/material";

export const darkTheme = createTheme ({
    palette: {
      mode: "dark",
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
        dark:"#31C463",
      },
      warning: {
        main: '#F9B635',
        light:"#FAC153",
        dark:"#F58E16",
      },
      background:{
        paper:"#121212",
        default:"#121212"
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    }
  });
  