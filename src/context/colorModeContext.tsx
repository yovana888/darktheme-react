import React, { Children, Dispatch, SetStateAction, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { changeThemeApp } from "../styles/themeConfig";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ColorModeContext = ({ children }: Props) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark
      }}
    >
      <ThemeProvider theme={changeThemeApp(dark ? "dark" : "light")}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
