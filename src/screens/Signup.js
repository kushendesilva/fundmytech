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

  const data = ["Developer", "Donator"];
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const renderOption = (title) => <SelectItem title={title} />;

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
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {data.map(renderOption)}
      </Select>
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
