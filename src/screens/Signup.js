import {
  Layout,
  Button,
  Icon,
  Input,
  Text,
  Select,
  SelectItem,
  IndexPath,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { Image, StatusBar, TouchableWithoutFeedback } from "react-native";

function Signup({ navigation }) {
  const theme = useTheme();

  const types = ["Developer", "Donator"];
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const accountType = types[selectedIndex.row];

  const renderOption = (title) => <SelectItem title={title} />;

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
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
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
    </Layout>
  );
}

export default Signup;
