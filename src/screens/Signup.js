import {
  Button,
  Icon,
  Input,
  Text,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import Screen from "../components/Screen";

function Signup({ navigation }) {
  const types = ["Developer", "Donator"];
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const accountType = types[selectedIndex.row];

  const renderOption = (title) => (
    <SelectItem key={accountType} title={title} />
  );

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    <Screen>
      <Image
        style={{
          width: "28%",
          height: "20%",
          alignSelf: "center",
          marginBottom: "5%",
        }}
        source={require("../assets/register.png")}
      />
      <Text
        category="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Signup
      </Text>
      <Text
        category="p2"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "2%" }}
        appearance="hint"
      >
        Create an Account
      </Text>
      <Select
        status="primary"
        size="large"
        style={{ marginHorizontal: "2%" }}
        label="Account Type"
        placeholder="Default"
        value={accountType}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {types.map(renderOption)}
      </Select>
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={name}
        label="Name"
        placeholder="Your Full Name"
        onChangeText={(nextValue) => setName(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={email}
        label="Email"
        placeholder="Personal Email"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={password}
        label="Password"
        placeholder="Should contain at least 8 symbols"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button
        style={{ margin: "2%" }}
        status="primary"
        size="giant"
        onPress={() => navigation.navigate("ReminderScreen")}
      >
        Signup
      </Button>
      <Button
        status="basic"
        appearance="ghost"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
    </Screen>
  );
}

export default Signup;
