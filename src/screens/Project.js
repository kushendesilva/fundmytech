import {
  Layout,
  Text,
  Button,
  Icon,
  useTheme,
  TopNavigation,
} from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar, View } from "react-native";

function Project({ navigation }) {
  const theme = useTheme();

  const UpVote = (props) => <Icon {...props} name="arrow-upward-outline" />;
  const DownVote = (props) => <Icon {...props} name="arrow-downward-outline" />;
  const GiftIcon = (props) => <Icon {...props} name="gift-outline" />;
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => (
    <Button
      size="large"
      status="primary"
      appearance="ghost"
      accessoryRight={BackIcon}
      onPress={() => navigation.goBack()}
    />
  );

  const Title = () => (
    <Text category="h5" status="primary" style={{ fontWeight: "bold" }}>
      Project Details
    </Text>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <TopNavigation accessoryLeft={BackAction} title={Title} />
      <Image
        style={{
          width: "64%",
          height: "36%",
          alignSelf: "center",
          marginVertical: "10%",
        }}
        source={require("../assets/project.png")}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          category="h4"
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: "1%",
            marginHorizontal: "3%",
          }}
        >
          Lorem Ipsum
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            accessoryLeft={UpVote}
            size="small"
            status="success"
            appearance="ghost"
          />
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>150</Text>
          <Button
            accessoryLeft={DownVote}
            size="small"
            status="danger"
            appearance="ghost"
          />
        </View>
      </View>
      <Text
        category="p1"
        style={{
          textAlign: "left",
          marginBottom: "4%",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
        accumsan leo. Nam lobortis dignissim nunc. Phasellus faucibus magna id
        tincidunt commodo. In suscipit dictum tempor. In hac habitasse platea
        dictumst. Proin rutrum porta nisl, eget lobortis nibh consectetur sed.
        Morbi fringilla sodales odio, non fringilla dolor tincidunt vel. Sed.
      </Text>
      <Text
        category="h6"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "1%",
          marginHorizontal: "3%",
        }}
      >
        Budget
      </Text>
      <Text
        category="p1"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        Rs.10,000
      </Text>
      <Button
        style={{ marginHorizontal: "2%", marginTop: "8%" }}
        status="primary"
        size="giant"
        accessoryRight={GiftIcon}
      >
        Donate
      </Button>
    </Layout>
  );
}

export default Project;
