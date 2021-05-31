import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeContext } from "./src/theme";
import Intro from "./src/screens/Intro";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import Reminder from "./src/screens/Reminder";
import Project from "./src/screens/Project";
import Account from "./src/screens/Account";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

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
                name="HomeScreens"
                component={HomeScreens}
                options={{
                  title: "Home",
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

const HomeScreens = (props) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="TabScreens"
      component={TabNavigator}
      options={{
        title: "Home",
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="ProjectScreen"
      component={Project}
      options={{
        title: "Project Details",
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Account" icon={AccountIcon} />
    <BottomNavigationTab title="Settings" icon={SettingsIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="HomeScreen" component={Home} />
    <BottomTab.Screen name="AccountScreen" component={Account} />
    <BottomTab.Screen name="SettingsScreen" component={Settings} />
  </BottomTab.Navigator>
);
