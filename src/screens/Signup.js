import {
  Layout,
  Button,
  Icon,
  Input,
  Text,
  ButtonGroup,
} from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar, TouchableWithoutFeedback } from "react-native";

function Signup({ navigation }) {
  const FacebookIcon = (props) => <Icon {...props} name="facebook-outline" />;
  const GoogleIcon = (props) => <Icon {...props} name="google-outline" />;
  const TwitterIcon = (props) => <Icon {...props} name="twitter-outline" />;

  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar backgroundColor="#222B45" barStyle="light-content" />
      <Image
        style={{
          width: "35%",
          height: "25%",
          alignSelf: "center",
          marginVertical: "10%",
        }}
        source={require("../assets/register.png")}
      />
      <Text
        category="h3"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Signup
      </Text>
      <Text
        category="p1"
        style={{ fontWeight: "bold", textAlign: "center" }}
        appearance="hint"
      >
        Create Your Account with Social Networks
      </Text>
      <ButtonGroup style={{ alignSelf: "center" }} appearance="ghost">
        <Button accessoryLeft={FacebookIcon} />
        <Button accessoryLeft={GoogleIcon} />
        <Button accessoryLeft={TwitterIcon} />
      </ButtonGroup>
      {/* <Menu
        style={{ marginHorizontal: "2%" }}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <MenuGroup title="Account Type" accessoryLeft={AccountIcon}>
          <MenuItem title="Developer" accessoryLeft={CodeIcon} />
          <MenuItem title="Regular" accessoryLeft={HeartIcon} />
        </MenuGroup>
      </Menu> */}
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={value}
        label="Name"
        placeholder="Your Full Name"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={value}
        label="Email"
        placeholder="Personal Email"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={value}
        label="Password"
        placeholder="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button
        style={{ marginHorizontal: "2%", marginTop: "5%" }}
        status="primary"
        size="giant"
        onPress={() => navigation.navigate("ReminderScreen")}
      >
        Sign Up
      </Button>
      <Button
        status="basic"
        appearance="ghost"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
    </Layout>
  );
}

export default Signup;
