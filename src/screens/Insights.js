import { Text } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import DeveloperPost from "../components/DeveloperPost";
import { Posts } from "../database";

function Insights({ navigation }) {
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => <View style={{ marginBottom: "3%" }} />}
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: "1.5%" }} />
        )}
        ListFooterComponent={() => (
          <Text
            category="p1"
            status="primary"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: "3%",
            }}
          >
            You Reached the End
          </Text>
        )}
        data={Posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <DeveloperPost
            onPress={() => navigation.navigate("InsightDetails")}
            title={item.title}
            votes={item.votes}
            budget={item.budget}
          />
        )}
      />
    </Screen>
  );
}

export default Insights;
