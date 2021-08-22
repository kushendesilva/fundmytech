import { Text, TabBar, Tab, Icon } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import RegularPost from "../components/RegularPost";
import DeveloperPost from "../components/DeveloperPost";
import RenderIf from "../components/RenderIf";
import { Posts } from "../database";
import { firebase } from "../firebase";

function Home({ navigation, route }) {
  const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
  const NewIcon = (props) => <Icon {...props} name="trending-up-outline" />;
  const { user } = route.params;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [posts, setPosts] = React.useState([]);

  const postRef = firebase.firestore().collection("posts");

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
        ListHeaderComponent={() => (
          <View style={{ marginBottom: "2%" }}>
            {RenderIf(
              user.developer == "Donator",
              <Text
                category="h4"
                status="primary"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "2%",
                }}
              >
                Projects
              </Text>
            )}
            {RenderIf(
              user.developer == true,
              <TabBar
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
              >
                <Tab title="New Projects" icon={NewIcon} />
                <Tab title="Your Projects" icon={PersonIcon} />
              </TabBar>
            )}
          </View>
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
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <>
            {RenderIf(
              user.type == "Donator",
              <RegularPost
                onPress={() =>
                  navigation.navigate("ProjectScreen", {
                    data: {
                      user: user,
                      remove: false,
                      title: item.title,
                      votes: item.votes,
                      description: item.description,
                      budget: item.budget,
                    },
                  })
                }
                title={item.title}
                votes={item.votes}
                description={item.description}
                budget={item.budget}
              />
            )}
            {RenderIf(
              user.developer == true,
              <>
                {RenderIf(
                  selectedIndex == 0,
                  <RegularPost
                    onPress={() =>
                      navigation.navigate("ProjectScreen", {
                        data: {
                          user: user,
                          remove: false,
                          title: item.title,
                          votes: item.votes,
                          description: item.description,
                          budget: item.budget,
                        },
                      })
                    }
                    title={item.title}
                    votes={item.votes}
                    description={item.description}
                    budget={item.budget}
                  />
                )}
                {RenderIf(
                  selectedIndex == 1,
                  <DeveloperPost
                    onPress={() =>
                      navigation.navigate("ProjectScreen", {
                        data: {
                          user: user,
                          remove: true,
                          title: item.title,
                          votes: item.votes,
                          description: item.description,
                          budget: item.budget,
                        },
                      })
                    }
                    title={item.title}
                    votes={item.votes}
                    description={item.description}
                    budget={item.budget}
                  />
                )}
              </>
            )}
          </>
        )}
      />
    </Screen>
  );
}

export default Home;
