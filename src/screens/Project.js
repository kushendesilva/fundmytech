import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Project(props) {
  const GiftIcon = (props) => <Icon {...props} name="gift-outline" />;

  return (
    <Layout>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/project1.png")}
      />
      <Text>Title</Text>
      <Text>Description</Text>
      <Text>Budget</Text>
      <Text>Rs.10,000</Text>
      <Button status="primary" accessoryRight={GiftIcon}>
        Donate
      </Button>
    </Layout>
  );
}

export default Project;
