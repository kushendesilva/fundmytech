import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import ScreenVariant from "../components/ScreenVariant";
import ExtendedButton from "../components/ExtendedButton";
import { ThemeContext } from "../theme";
import { firebase } from "../firebase";

function Settings({ navigation }) {
  const themeContext = React.useContext(ThemeContext);

  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

  return (
    <ScreenVariant>
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
      <ExtendedButton
        title="Dark Mode"
        tabIcon={DarkIcon}
        onPress={themeContext.toggleTheme}
      />
      <ExtendedButton title="Notifications" tabIcon={BellIcon} />
      <ExtendedButton
        title="Log Out"
        tabIcon={LogOutIcon}
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(
              () => {
                navigation.navigate("LoginScreen");
              },
              function (error) {
                // An error happened.
              }
            );
        }}
      />
    </ScreenVariant>
  );
}

export default Settings;
