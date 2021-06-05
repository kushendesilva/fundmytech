import React, { useState } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Input, Button, Layout, Icon } from "@ui-kitten/components";
import RenderIf from "../components/RenderIf";
import { Users } from "../database";
import ScreenVariant from "../components/ScreenVariant";

function AppEditShop(props) {
  const [name, setName] = useState(Users.name);
  const [email, setEmail] = useState(Users.email);
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
          disabled={visibility}
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
          disabled={visibility}
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
                setVisibility(!visibility);
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
