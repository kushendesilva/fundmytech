import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Intro(props) {
  const ArrowIcon = (props) => (
    <Icon {...props} name="arrow-ios-forward-outline" />
  );

  return (
    <Layout>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/intro.png")}
      />
      <Text>Make Your Dreams Come True</Text>
      <Text>Have a Dream, Make a Plan and Go for it.</Text>
      <Text>We'll make sure You Get there.</Text>
      <Button status="primary" accessoryRight={ArrowIcon}>
        Get Started
      </Button>
    </Layout>
  );
}

export default Intro;
