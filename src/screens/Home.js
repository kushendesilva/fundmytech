import { Layout, useTheme } from "@ui-kitten/components";
import React from "react";
import { StatusBar, FlatList } from "react-native";
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
