import { Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";
import Screen from "../components/Screen";

function Intro({ navigation }) {
  const ArrowIcon = (props) => (
    <Icon {...props} name="arrow-ios-forward-outline" />
  );

  return (
    <Screen>
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
    </Screen>
  );
}

export default Intro;
