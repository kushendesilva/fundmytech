import {
  Button,
  Icon,
  Input,
  Text,
  SelectItem,
  IndexPath,
  Toggle,
} from "@ui-kitten/components";
import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import Screen from "../components/Screen";
import { firebase } from "../firebase";

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

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const onRegisterPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        //const itemID = response.doc.id;
        const data = {
          id: uid,
          email,
          name,
          developer: checked,
        };

        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("ReminderScreen");
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

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
      <Text
        category="p2"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "2%" }}
        appearance="hint"
      >
        Are You a Developer?
        <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
      </Text>

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
        onPress={() => onRegisterPress()}
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
