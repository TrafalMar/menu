import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme, nightTheme } from "../../constants/colors";
import Main from "./Main";
import NavBar from "./NavBar";
import { GlobalStyle } from "./styles";

interface Props {
  children: any;
}

export type Themes = "default" | "dark" | "night";

export const ThemeContext = React.createContext({
  changeTheme: (value: Themes) => {},
});

export default function layout({ children }: Props) {
  const themes: any = {
    default: defaultTheme,
    dark: darkTheme,
    night: nightTheme,
  };
  const [theme, setTheme] = useState<any>(themes.default);
  const [themeName, setThemeName] = useState<Themes>();

  useEffect(() => {
    const localTheme = localStorage?.getItem("theme");

    if (!localTheme) {
      return;
    }
    setTheme(themes[localTheme]);
  }, []);

  useEffect(() => {
    if (!themeName) {
      return;
    }

    localStorage.setItem("theme", themeName);
    setTheme(themes[themeName]);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ changeTheme: setThemeName }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Main>{children}</Main>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
