import { Text } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import InsightPost from "../components/InsightPost";
import { firebase } from "../firebase";

function Insights({ navigation, route }) {
  const { user } = route.params;
  const [posts, setPosts] = React.useState([]);

  const postRef = firebase
    .firestore()
    .collection("posts")
    .where("email", "==", user.email);

  React.useEffect(() => {
    postRef.onSnapshot(
      (querySnapshot) => {
        const newPosts = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          newPosts.push(post);
        });
        setPosts(newPosts);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => <View style={{ marginVertical: "1.5%" }} />}
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
        ItemSeparatorComponent={() => (
          <View style={{ marginVertical: "1.5%" }} />
        )}
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <InsightPost
            onPress={() =>
              navigation.navigate("InsightDetails", {
                votes: item.votes,
              })
            }
            title={item.title}
            votes={item.votes}
          />
        )}
      />
    </Screen>
  );
}

export default Insights;
