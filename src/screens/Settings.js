import {
  Layout,
  Button,
  Icon,
  Text,
  useTheme,
  Card,
  Toggle,
} from "@ui-kitten/components";
import React from "react";
import { StatusBar, View } from "react-native";
import AccountTabs from "../components/AccountTabs";
import { ThemeContext } from "../theme";

function Settings({ navigation }) {
  const theme = useTheme();

  const themeContext = React.useContext(ThemeContext);

  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <Text
        status="primary"
        category="h4"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2%",
        }}
      >
        Settings
      </Text>

      <Card style={{ margin: "2%" }}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Button
                accessoryRight={BellIcon}
                status="primary"
                appearance="ghost"
              />
              <Text category="h6" style={{ fontWeight: "bold" }}>
                Notifications
              </Text>
            </View>
            <Toggle checked={checked} onChange={onCheckedChange} />
          </View>
        </View>
      </Card>
      <AccountTabs
        title="Dark Mode"
        tabIcon={DarkIcon}
        onPress={themeContext.toggleTheme}
      />
      <AccountTabs
        title="Log Out"
        tabIcon={LogOutIcon}
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </Layout>
  );
}

export default Settings;
