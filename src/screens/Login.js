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

function Login(props) {
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
    <Layout>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/login.png")}
      />
      <Text>Login</Text>
      <Text>Login with social networks</Text>
      <ButtonGroup appearance="ghost">
        <Button accessoryLeft={FacebookIcon} />
        <Button accessoryLeft={GoogleIcon} />
        <Button accessoryLeft={TwitterIcon} />
      </ButtonGroup>
      <Input
        value={value}
        label="Email"
        placeholder="Your Email"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        value={value}
        label="Password"
        placeholder="Your Password"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button status="primary">Login</Button>
    </Layout>
  );
}

export default Login;
