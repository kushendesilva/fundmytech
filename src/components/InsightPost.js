import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  Text,
  Button,
  Icon,
  Divider,
  Layout,
  Avatar,
} from "@ui-kitten/components";

function InsightPost({ style, onPress, budget, title, description, votes }) {
  const Heart = (props) => <Icon {...props} name="heart-outline" />;

  return (
    <Card
      onPress={onPress}
      style={
        ({ style }, { marginHorizontal: "2%", borderRadius: 10, elevation: 2 })
      }
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Avatar
            style={styles.avatar}
            size="giant"
            source={require("../assets/post.png")}
          />
          <View>
            <Text category="h6" style={{ fontWeight: "bold" }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              status="info"
              style={{ alignSelf: "center", fontWeight: "bold" }}
            >
              {votes}
            </Text>
            <Button
              accessoryLeft={Heart}
              size="small"
              status="danger"
              appearance="ghost"
            />
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 8,
  },
  avatar: {
    margin: 8,
  },
});

export default InsightPost;
