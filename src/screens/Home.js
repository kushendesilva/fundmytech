import { Text } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import RegularPost from "../components/RegularPost";
import DeveloperPost from "../components/DeveloperPost";
import RenderIf from "../components/RenderIf";
import { Posts, Users } from "../database";

function Home({ navigation }) {
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            category="h4"
            status="primary"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: "2%",
            }}
          >
            Projects
          </Text>
        )}
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
          <>
            {RenderIf(
              Users.type == "Donator",
              <RegularPost
                onPress={() => navigation.navigate("ProjectScreen")}
                title={item.title}
                votes={item.votes}
                description={item.description}
                budget={item.budget}
              />
            )}
            {RenderIf(
              Users.type == "Developer",
              <DeveloperPost
                onPress={() => navigation.navigate("ProjectScreen")}
                title={item.title}
                votes={item.votes}
                description={item.description}
                budget={item.budget}
              />
            )}
          </>
        )}
      />
    </Screen>
  );
}

export default Home;
