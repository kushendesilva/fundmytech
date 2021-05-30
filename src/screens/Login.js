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

function Login({ navigation }) {
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
          width: "40%",
          height: "30%",
          alignSelf: "center",
          marginVertical: "10%",
        }}
        source={require("../assets/login.png")}
      />
      <Text
        category="h3"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Login
      </Text>
      <Text
        category="p1"
        style={{ fontWeight: "bold", textAlign: "center" }}
        appearance="hint"
      >
        Login with social networks
      </Text>
      <ButtonGroup style={{ alignSelf: "center" }} appearance="ghost">
        <Button accessoryLeft={FacebookIcon} />
        <Button accessoryLeft={GoogleIcon} />
        <Button accessoryLeft={TwitterIcon} />
      </ButtonGroup>
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={value}
        label="Email"
        placeholder="Your Email"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={value}
        label="Password"
        placeholder="Your Password"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button status="basic" appearance="ghost" style={{ marginTop: "5%" }}>
        Forgot Password?
      </Button>
      <Button
        style={{ marginHorizontal: "2%" }}
        status="primary"
        size="giant"
        onPress={() => navigation.navigate("ProjectScreen")}
      >
        Login
      </Button>
      <Button
        status="basic"
        appearance="ghost"
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        Sign up
      </Button>
    </Layout>
  );
}

export default Login;
