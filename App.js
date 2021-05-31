import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import RegularPost from "./src/components/RegularPost";
import DeveloperPost from "./src/components/DeveloperPost";

const MainStack = createStackNavigator();

export default () => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <NavigationContainer>
            <MainStack.Navigator
              screenOptions={{
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            >
              <MainStack.Screen
                name="IntroScreen"
                component={Intro}
                options={{
                  title: "Get Started",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="LoginScreen"
                component={Login}
                options={{
                  title: "Login",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="SignUpScreen"
                component={Signup}
                options={{
                  title: "Sign Up",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="ReminderScreen"
                component={Reminder}
                options={{
                  title: "Reminder",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="ProjectScreen"
                component={Project}
                options={{
                  title: "Project Details",
                  headerShown: false,
                }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
