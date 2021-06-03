import {  Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";
import Screen from "../components/Screen";

function Reminder({ navigation }) {

  const CheckIcon = (props) => (
    <Icon {...props} name="checkmark-circle-outline" />
  );

  return (
    <Screen >
      <Image
        style={{
          width: "70%",
          height: "35%",
          alignSelf: "center",
          marginBottom: "10%",
        }}
        source={require("../assets/reminder.png")}
      />
      <Text category="h4" style={{ fontWeight: "bold", textAlign: "center" }}>
        Make Your Project
      </Text>
      <Text
        category="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "2%" }}
      >
        Open Source
      </Text>
      <Text
        category="p2"
        appearance="hint"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Help the community by making your Project
      </Text>
      <Text
        category="p2"
        appearance="hint"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Open Source and Free to use with GitHub integration
      </Text>
      <Text
        category="p2"
        appearance="hint"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        (Not Required)
      </Text>
      <Button
        style={{ marginHorizontal: "2%", marginTop: "10%" }}
        status="primary"
        size="giant"
        accessoryRight={CheckIcon}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Finish
      </Button>
    </Screen>
  );
}

export default Reminder;
