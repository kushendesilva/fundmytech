import { Layout, Text, Button, Icon, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Intro({ navigation }) {
  const theme = useTheme();

  const ArrowIcon = (props) => (
    <Icon {...props} name="arrow-ios-forward-outline" />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <Image
        style={{
          width: "100%",
          height: "50%",
          alignSelf: "center",
          marginVertical: "10%",
        }}
        source={require("../assets/intro.png")}
      />
      <Text
        category="h3"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Make Your Dreams Come True
      </Text>
      <Text
        category="p1"
        appearance="hint"
        style={{ textAlign: "center", marginBottom: "1%" }}
      >
        Have a Dream, Make a Plan
      </Text>
      <Text
        category="p1"
        appearance="hint"
        style={{ textAlign: "center", marginBottom: "1%" }}
      >
        and Go for it.
      </Text>
      <Text category="p1" appearance="hint" style={{ textAlign: "center" }}>
        We'll make sure You Get there.
      </Text>
      <Button
        style={{ marginHorizontal: "2%", marginTop: "20%" }}
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
