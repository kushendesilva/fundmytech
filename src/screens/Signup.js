import {
  Layout,
  Button,
  Icon,
  MenuGroup,
  MenuItem,
  Menu,
  Input,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar, TouchableWithoutFeedback } from "react-native";

function Signup(props) {
  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
  const HeartIcon = (props) => <Icon {...props} name="heart-outline" />;
  const CodeIcon = (props) => <Icon {...props} name="code-outline" />;

  const [selectedIndex, setSelectedIndex] = React.useState(null);

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
        source={require("../assets/register.png")}
      />
      <Text>Signup</Text>
      <Text>Create Your Account</Text>
      <Menu
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <MenuGroup title="Account Type" accessoryLeft={AccountIcon}>
          <MenuItem title="Developer" accessoryLeft={CodeIcon} />
          <MenuItem title="Regular" accessoryLeft={HeartIcon} />
        </MenuGroup>
      </Menu>
      <Input
        value={value}
        label="Name"
        placeholder="Your Full Name"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        value={value}
        label="Email"
        placeholder="Personal Email"
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        value={value}
        label="Password"
        placeholder="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button status="primary">Sign Up</Button>
      <Button status="primary" appearance="ghost">
        Login
      </Button>
    </Layout>
  );
}

export default Signup;
