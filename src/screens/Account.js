import { Icon, Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ExtendedButton from "../components/ExtendedButton";

function Account({ navigation }) {
  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
  const PayPalIcon = (props) => <Icon {...props} name="credit-card-outline" />;
  const EarningsIcon = (props) => <Icon {...props} name="briefcase-outline" />;
  const InsightsIcon = (props) => <Icon {...props} name="activity-outline" />;

  const AccountItems = [
    {
      onPress: () => navigation.navigate("InfoScreen"),
      title: "Account Information",
      tabIcon: AccountIcon,
    },
    {
      title: "PayPal",
      tabIcon: PayPalIcon,
    },
    {
      onPress: () => navigation.navigate("EarningScreen"),
      title: "Earnings",
      tabIcon: EarningsIcon,
    },
    {
      onPress: () => navigation.navigate("InsightScreen"),
      title: "Insights",
      tabIcon: InsightsIcon,
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
            Account
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={{ marginVertical: "2%" }} />}
        data={AccountItems}
        keyExtractor={(account) => account.title}
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

export default Account;
