import { Layout, Text, Button, Icon, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Intro({ navigation }) {
  const theme = useTheme();

  const ArrowIcon = (props) => (
    <Icon {...props} name="arrow-ios-forward-outline" />
  );

  return (
    <Layout style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <Image
        style={{
          width: "80%",
          height: "40%",
          alignSelf: "center",
          marginBottom: "10%",
        }}
        source={require("../assets/intro.png")}
      />
      <Text
        category="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Make Your Dreams Come True
      </Text>
      <Text
        category="p2"
        appearance="hint"
        style={{ textAlign: "center", marginBottom: "1%" }}
      >
        Have a Dream, Make a Plan
      </Text>
      <Text
        category="p2"
        appearance="hint"
        style={{ textAlign: "center", marginBottom: "1%" }}
      >
        and Go for it.
      </Text>
      <Text category="p2" appearance="hint" style={{ textAlign: "center" }}>
        We'll make sure You Get there.
      </Text>
      <Button
        style={{ marginHorizontal: "2%", marginTop: "10%" }}
        status="primary"
        size="giant"
        accessoryRight={ArrowIcon}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Get Started
      </Button>
    </Layout>
  );
}

export default Intro;
