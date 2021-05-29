import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar } from "react-native";

function Reminder(props) {
  const CheckIcon = (props) => (
    <Icon {...props} name="checkmark-circle-outline" />
  );

  return (
    <Layout>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/reminder.png")}
      />
      <Text>Make Your Project Open Source</Text>
      <Text>
        Help the community by making your Project Open Source and Free to use
        with GitHub integration
      </Text>
      <Text>(Not Required)</Text>
      <Button status="primary" accessoryRight={CheckIcon}>
        Finish
      </Button>
    </Layout>
  );
}

export default Reminder;
