import { Button, Input, Text } from "@ui-kitten/components";
import React from "react";
import { Image, ScrollView } from "react-native";
import ScreenVariant from "../components/ScreenVariant";

function NewProject({ navigation }) {
  const [title, setTitle] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [description, setDescription] = React.useState("");

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
          onPress={() => navigation.navigate("TabScreens")}
        >
          Confirm
        </Button>
      </ScrollView>
    </ScreenVariant>
  );
}

export default NewProject;
