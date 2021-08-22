import { Button, Input, Text } from "@ui-kitten/components";
import React from "react";
import { Image, ScrollView } from "react-native";
import ScreenVariant from "../components/ScreenVariant";
import { firebase } from "../firebase";

function NewProject({ navigation, route }) {
  const { user } = route.params;
  const [title, setTitle] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [description, setDescription] = React.useState("");

  const postRef = firebase.firestore().collection("posts");

  const onAddButtonPress = () => {
    if (title && title.length > 0) {
      const data = {
        title,
        budget,
        description,
        votes: 0,
        email: user.email,
      };
      postRef
        .add(data)
        .then((_doc) => {
          setTitle("");
          navigation.navigate("TabScreens");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <ScreenVariant>
      <Image
        style={{
          width: "25%",
          height: "25%",
          alignSelf: "center",
        }}
        source={require("../assets/post.png")}
      />
      <Text
        category="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: "1%" }}
      >
        Enter Project Details
      </Text>
      <ScrollView>
        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={title}
          label="Title"
          placeholder="Project Title"
          onChangeText={(nextValue) => setTitle(nextValue)}
        />
        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={budget}
          label="Budget"
          placeholder="Project Budget"
          onChangeText={(nextValue) => setBudget(nextValue)}
        />

        <Input
          style={{ marginHorizontal: "2%", marginVertical: "1%" }}
          size="large"
          status="primary"
          value={description}
          label="Description"
          placeholder="Project Description"
          onChangeText={(nextValue) => setDescription(nextValue)}
          multiline={true}
        />
        <Button
          style={{ margin: "2%" }}
          status="primary"
          size="giant"
          onPress={() => onAddButtonPress()}
        >
          Confirm
        </Button>
      </ScrollView>
    </ScreenVariant>
  );
}

export default NewProject;
