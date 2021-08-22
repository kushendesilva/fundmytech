import { Icon, Text } from "@ui-kitten/components";
import React from "react";
import ScreenVariant from "../components/ScreenVariant";
import ExtendedButton from "../components/ExtendedButton";
import RenderIf from "../components/RenderIf";
import { Users } from "../database";

function Account({ navigation }) {
  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
  const PayPalIcon = (props) => <Icon {...props} name="credit-card-outline" />;
  const EarningsIcon = (props) => <Icon {...props} name="briefcase-outline" />;
  const InsightsIcon = (props) => <Icon {...props} name="activity-outline" />;
  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;

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
        Account
      </Text>
      <ExtendedButton
        title="Account Information"
        tabIcon={AccountIcon}
        onPress={() => navigation.navigate("InfoScreen")}
      />
      <ExtendedButton title="PayPal" tabIcon={PayPalIcon} />

      {RenderIf(
        Users.developer == true,
        <>
          <ExtendedButton
            title="New Project"
            tabIcon={PlusIcon}
            onPress={() => navigation.navigate("NewProject")}
          />
          <ExtendedButton
            title="Earnings"
            tabIcon={EarningsIcon}
            onPress={() => navigation.navigate("EarningScreen")}
          />
          <ExtendedButton
            title="Insights"
            tabIcon={InsightsIcon}
            onPress={() => navigation.navigate("InsightScreen")}
          />
        </>
      )}
    </ScreenVariant>
  );
}

export default Account;
