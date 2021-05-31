import { Layout, useTheme, Text } from "@ui-kitten/components";
import React from "react";
import { StatusBar, FlatList, View } from "react-native";
import RegularPost from "../components/RegularPost";
import Posts from "../Posts";

function Home({ navigation }) {
  const theme = useTheme();
  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme["color-primary-default"]}
        barStyle="light-content"
      />
      <FlatList
        ListHeaderComponent={() => (
          <Text
            category="h3"
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
            category="h6"
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
          <RegularPost
            onPress={() => navigation.navigate("ProjectScreen")}
            title={item.title}
            votes={item.votes}
            description={item.description}
            budget={item.budget}
          />
        )}
      />
    </Layout>
  );
}

export default Home;
