import { Layout, Button, Icon, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StatusBar } from "react-native";
import AccountTabs from "../components/AccountTabs";
import { ThemeContext } from "../theme";

function Account({ navigation }) {
  const theme = useTheme();

  const themeContext = React.useContext(ThemeContext);

  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
  const PayPalIcon = (props) => <Icon {...props} name="credit-card-outline" />;
  const EarningsIcon = (props) => <Icon {...props} name="briefcase-outline" />;
  const InsightsIcon = (props) => <Icon {...props} name="activity-outline" />;
  const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <Text
        status="primary"
        category="h3"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "2%",
        }}
      >
        Account
      </Text>

      <AccountTabs title="Account Information" tabIcon={AccountIcon} />
      <AccountTabs title="PayPal" tabIcon={PayPalIcon} />
      <AccountTabs title="Earnings" tabIcon={EarningsIcon} />
      <AccountTabs title="Insights" tabIcon={InsightsIcon} />
      <AccountTabs
        title="Dark Mode"
        tabIcon={DarkIcon}
        onPress={themeContext.toggleTheme}
      />

      <Button
        status="basic"
        appearance="ghost"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Log Out
      </Button>
    </Layout>
  );
}

export default Account;
