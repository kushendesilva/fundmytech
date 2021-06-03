import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import { View, FlatList } from "react-native";
import Screen from "../components/Screen";
import ExtendedButton from "../components/ExtendedButton";
import { ThemeContext } from "../theme";

function Settings({ navigation }) {
  const themeContext = React.useContext(ThemeContext);

  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

  const SettingsItems = [
    {
      onPress: themeContext.toggleTheme,
      title: "Dark Mode",
      tabIcon: DarkIcon,
    },
    {
      title: "Notifications",
      tabIcon: BellIcon,
    },
    {
      onPress: () => navigation.navigate("LoginScreen"),
      title: "Log Out",
      tabIcon: LogOutIcon,
    },
  ];

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            category="h4"
            status="primary"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: "2%",
            }}
          >
            Settings
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={{ marginVertical: "2%" }} />}
        data={SettingsItems}
        keyExtractor={(settings) => settings.title}
        renderItem={({ item }) => (
          <ExtendedButton
            title={item.title}
            tabIcon={item.tabIcon}
            onPress={item.onPress}
          />
        )}
      />
    </Screen>
  );
}

export default Settings;
