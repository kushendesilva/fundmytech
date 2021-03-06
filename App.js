import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, Icon } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeContext } from "./src/theme";
import Intro from "./src/screens/Intro";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Reminder from "./src/screens/Reminder";
import Project from "./src/screens/Project";
import Home from "./src/screens/Home";
import Earnings from "./src/screens/Earnings";
import AccountInfo from "./src/screens/AccountInfo";
import Insights from "./src/screens/Insights";
import InsightDetails from "./src/screens/InsightDetails";
import NewProject from "./src/screens/NewProject";
import { firebase } from "./src/firebase";

const MainStack = createStackNavigator();

export default () => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <NavigationContainer>
            <MainStack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#3366FF" },
                headerTintColor: "white",
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
                name="HomeScreen"
                component={Home}
                options={{
                  title: "Home",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="NewProject"
                component={NewProject}
                options={{
                  title: "New Project",
                }}
              />
              <MainStack.Screen
                name="InfoScreen"
                component={AccountInfo}
                options={{
                  title: "Account Information",
                }}
              />
              <MainStack.Screen
                name="EarningScreen"
                component={Earnings}
                options={{
                  title: "Project Earnings",
                }}
              />
              <MainStack.Screen
                name="InsightScreen"
                component={Insights}
                options={{
                  title: "Projects",
                }}
              />
              <MainStack.Screen
                name="InsightDetails"
                component={InsightDetails}
                options={{
                  title: "Project Insights",
                }}
              />
              <MainStack.Screen
                name="ProjectScreen"
                component={Project}
                options={{
                  title: "Project Details",
                }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
