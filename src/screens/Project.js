import { Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import Screen from "../components/Screen";
import RenderIf from "../components/RenderIf";
import { Users } from "../database";

function Project({ navigation, route }) {
  const UpVote = (props) => <Icon {...props} name="arrow-upward-outline" />;
  const DownVote = (props) => <Icon {...props} name="arrow-downward-outline" />;
  const GiftIcon = (props) => <Icon {...props} name="gift-outline" />;
  const BinIcon = (props) => <Icon {...props} name="trash-2-outline" />;
  const HeartIcon = (props) => <Icon {...props} name="heart-outline" />;
  const { data } = route.params;

  return (
    <Screen>
      <Image
        style={{
          width: "48%",
          height: "27%",
          alignSelf: "center",
          marginBottom: "5%",
        }}
        source={require("../assets/project.png")}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          category="h5"
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: "1%",
            marginHorizontal: "3%",
          }}
        >
          {data.title}
        </Text>
        {RenderIf(
          data.remove == true,
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              status="info"
              style={{ alignSelf: "center", fontWeight: "bold" }}
            >
              {data.votes}
            </Text>
            <Button
              accessoryLeft={HeartIcon}
              size="small"
              status="danger"
              appearance="ghost"
            />
          </View>
        )}
        {RenderIf(
          data.remove == false,
          <View style={{ flexDirection: "row" }}>
            <Button
              accessoryLeft={UpVote}
              size="small"
              status="success"
              appearance="ghost"
            />
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              {data.votes}
            </Text>
            <Button
              accessoryLeft={DownVote}
              size="small"
              status="danger"
              appearance="ghost"
            />
          </View>
        )}
      </View>
      <Text
        category="p1"
        style={{
          textAlign: "left",
          marginBottom: "4%",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        {data.description}
      </Text>
      <Text
        category="h6"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "1%",
          marginHorizontal: "3%",
        }}
      >
        Budget
      </Text>
      <Text
        category="p1"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        Rs.{data.budget}
      </Text>
      {RenderIf(
        data.remove == false,
        <Button
          style={{ marginHorizontal: "2%", marginTop: "5%" }}
          status="primary"
          size="giant"
          accessoryRight={GiftIcon}
        >
          Donate
        </Button>
      )}
      {RenderIf(
        data.remove == true,
        <Button
          style={{ marginHorizontal: "2%", marginTop: "5%" }}
          status="danger"
          size="giant"
          accessoryRight={BinIcon}
        >
          Delete
        </Button>
      )}
    </Screen>
  );
}

export default Project;
