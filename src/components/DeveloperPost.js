import React from "react";
import { View } from "react-native";
import { Card, Text, Button, Icon, Divider } from "@ui-kitten/components";

function DeveloperPost({ style, onPress, budget, title, description, votes }) {
  const Heart = (props) => <Icon {...props} name="heart-outline" />;

  return (
    <Card onPress={onPress} style={({ style }, { margin: "2%" })}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text category="p1" status="primary" style={{ fontWeight: "bold" }}>
              Rs.{budget}
            </Text>
            <Text category="h4" style={{ fontWeight: "bold" }}>
              {title}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
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
        <Divider style={{ marginVertical: "2%" }} />
        <Text category="p2" appearance="hint" style={{ fontWeight: "bold" }}>
          {description}
        </Text>
      </View>
    </Card>
  );
}

export default DeveloperPost;
