import React, { useState } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Input, Button, Icon } from "@ui-kitten/components";
import RenderIf from "../components/RenderIf";
import ScreenVariant from "../components/ScreenVariant";
import { firebase } from "../firebase";

function AppEditShop(props) {
  const { user } = props.route.params;

  const userRef = firebase.firestore().collection("users").doc(user.id);

  const onEditButtonPress = () => {
    if (
      (name && name.length > 0 && email && email.length > 0) ||
      (password && password.length > 0)
    ) {
      const data = {
        name: name,
        email: email,
        id: user.id,
        developer: user.developer,
      };
      userRef
        .set(data)
        .then((_doc) => {
          setPassword("");
          setVisibility(!visibility);
          props.navigation.goBack();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableNativeFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableNativeFeedback>
  );
  const EditIcon = (props) => <Icon {...props} name="edit-2-outline" />;
  const CancelIcon = (props) => <Icon {...props} name="slash-outline" />;
  const SaveIcon = (props) => <Icon {...props} name="save-outline" />;

  return (
    <ScreenVariant>
      <View style={{ padding: 10 }}>
        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={name}
          label="Name"
          placeholder="Change Your Name"
          onChangeText={(nextValue) => setName(nextValue)}
          disabled={visibility}
        />
        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={email}
          label="Email"
          placeholder="Change Your Email"
          onChangeText={(nextValue) => setEmail(nextValue)}
          disabled={true}
        />
        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={password}
          label="Password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          placeholder="Enter Your New Password"
          onChangeText={(nextValue) => setPassword(nextValue)}
          disabled={true}
        />

        {RenderIf(
          visibility,
          <Button
            accessoryRight={EditIcon}
            style={{ alignSelf: "center", marginTop: "2%" }}
            status="warning"
            size="giant"
            onPress={() => {
              setVisibility(!visibility);
            }}
          >
            Change
          </Button>
        )}
        {RenderIf(
          !visibility,
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "2%",
            }}
          >
            <Button
              accessoryRight={CancelIcon}
              status="danger"
              size="giant"
              onPress={() => {
                setVisibility(!visibility);
              }}
            >
              Cancel
            </Button>
            <Button
              accessoryRight={SaveIcon}
              status="success"
              size="giant"
              onPress={() => {
                onEditButtonPress();
              }}
            >
              Update
            </Button>
          </View>
        )}
      </View>
    </ScreenVariant>
  );
}

export default AppEditShop;
