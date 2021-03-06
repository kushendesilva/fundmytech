import { Button, Icon, Input, Text, ButtonGroup } from "@ui-kitten/components";
import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import Screen from "../components/Screen";
import { firebase } from "../firebase";

function Login({ navigation }) {
  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.toLowerCase(), password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate("HomeScreen", { user: user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const FacebookIcon = (props) => <Icon {...props} name="facebook-outline" />;
  const GoogleIcon = (props) => <Icon {...props} name="google-outline" />;
  const TwitterIcon = (props) => <Icon {...props} name="twitter-outline" />;

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
          width: "32%",
          height: "24%",
          alignSelf: "center",
          marginBottom: "5%",
        }}
        source={require("../assets/login.png")}
      />
      <Text
        category="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Login
      </Text>
      <Text
        category="p2"
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
        value={email}
        label="Email"
        placeholder="Your Email"
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        style={{ marginHorizontal: "2%", marginVertical: "1%" }}
        size="large"
        status="primary"
        value={password}
        label="Password"
        placeholder="Your Password"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button status="basic" appearance="ghost" style={{ marginTop: "5%" }}>
        Forgot Password?
      </Button>
      <Button
        style={{ marginHorizontal: "2%" }}
        status="primary"
        size="giant"
        onPress={() => onLoginPress()}
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
    </Screen>
  );
}

export default Login;
