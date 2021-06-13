import React from "react";
import { View, Image } from "react-native";
import { Text, Button, Icon, Card, Divider } from "@ui-kitten/components";

function RegularPost({ style, onPress, budget, votes, description, title }) {
  const UpVote = (props) => <Icon {...props} name="arrow-upward-outline" />;
  const DownVote = (props) => <Icon {...props} name="arrow-downward-outline" />;

  return (
    <Card
      onPress={onPress}
      style={
        ({ style }, { marginHorizontal: "2%", borderRadius: 10, elevation: 2 })
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/post.png")}
          resizeMode="cover"
          style={{
            width: 100,
            height: 150,
            borderRadius: 10,
            marginRight: "5%",
          }}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                category="p2"
                status="primary"
                style={{ fontWeight: "bold" }}
              >
                Rs.{budget}
              </Text>
              <Text category="h6" style={{ fontWeight: "bold" }}>
                {title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Button
                accessoryLeft={UpVote}
                size="small"
                status="success"
                appearance="ghost"
              />
              <Text
                status="info"
                style={{ alignSelf: "center", fontWeight: "bold" }}
              >
                {votes}
              </Text>
              <Button
                accessoryLeft={DownVote}
                size="small"
                status="danger"
                appearance="ghost"
              />
            </View>
          </View>
          <Divider style={{ marginVertical: "2%" }} />
          <Text category="s2" appearance="hint" style={{ fontWeight: "bold" }}>
            {description}
          </Text>
        </View>
      </View>
    </Card>
  );
}

export default RegularPost;
