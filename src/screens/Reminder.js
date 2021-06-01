import { Layout, Text, Button, Icon, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Reminder({ navigation }) {
  const theme = useTheme();

  const CheckIcon = (props) => (
    <Icon {...props} name="checkmark-circle-outline" />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <Image
        style={{
          width: "70%",
          height: "35%",
          alignSelf: "center",
          marginVertical: "10%",
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
    </Layout>
  );
}

export default Reminder;
