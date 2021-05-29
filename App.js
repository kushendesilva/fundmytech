import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeContext } from "./src/theme-context";
import Intro from "./src/screens/Intro";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Reminder from "./src/screens/Reminder";
import Project from "./src/screens/Project";

export default () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <Login></Login>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
