import { TabBar, Tab, Icon, Text } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import ScreenVariant from "../components/ScreenVariant";
import RegularPost from "../components/RegularPost";
import DeveloperPost from "../components/DeveloperPost";
import RenderIf from "../components/RenderIf";
import { firebase } from "../firebase";
import ExtendedButton from "../components/ExtendedButton";
import { ThemeContext } from "../theme";

function Home({ navigation, route }) {
  const themeContext = React.useContext(ThemeContext);

  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
  const PayPalIcon = (props) => <Icon {...props} name="credit-card-outline" />;
  const EarningsIcon = (props) => <Icon {...props} name="briefcase-outline" />;
  const InsightsIcon = (props) => <Icon {...props} name="activity-outline" />;
  const PlusIcon = (props) => <Icon {...props} name="plus-circle-outline" />;
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const NewIcon = (props) => <Icon {...props} name="trending-up-outline" />;
  const AccountIcon = (props) => <Icon {...props} name="person-outline" />;
  const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
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

  const [myPosts, setMyPosts] = React.useState([]);

  const myPostRef = firebase
    .firestore()
    .collection("posts")
    .where("email", "==", user.email);

  React.useEffect(() => {
    myPostRef.onSnapshot(
      (querySnapshot) => {
        const newMyPosts = [];
        querySnapshot.forEach((doc) => {
          const myPost = doc.data();
          myPost.id = doc.id;
          newMyPosts.push(myPost);
        });
        setMyPosts(newMyPosts);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <ScreenVariant>
      {RenderIf(
        user.developer == false,
        <>
          <TabBar
            style={{ marginVertical: "3%" }}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab icon={NewIcon} />
            <Tab icon={AccountIcon} />
            <Tab icon={SettingsIcon} />
          </TabBar>
          {RenderIf(
            selectedIndex == 0,
            <FlatList
              ListHeaderComponent={() => (
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
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: "1.5%" }} />
              )}
              data={posts}
              keyExtractor={(post) => post.id.toString()}
              renderItem={({ item }) => (
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
                        email: item.email,
                        name: item.name,
                      },
                    })
                  }
                  title={item.title}
                  votes={item.votes}
                  description={item.description}
                  budget={item.budget}
                />
              )}
            />
          )}

          {RenderIf(
            selectedIndex == 1,
            <>
              <ExtendedButton
                title="Account Information"
                tabIcon={AccountIcon}
                onPress={() =>
                  navigation.navigate("InfoScreen", {
                    user: user,
                  })
                }
              />
              <ExtendedButton
                title="PayPal"
                tabIcon={PayPalIcon}
                onPress={() =>
                  navigation.navigate("InfoScreen", {
                    user: user,
                  })
                }
              />
            </>
          )}
          {RenderIf(
            selectedIndex == 2,
            <>
              <ExtendedButton
                title="Dark Mode"
                tabIcon={DarkIcon}
                onPress={themeContext.toggleTheme}
              />
              <ExtendedButton title="Notifications" tabIcon={BellIcon} />
              <ExtendedButton
                title="Log Out"
                tabIcon={LogOutIcon}
                onPress={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then(
                      () => {
                        navigation.navigate("LoginScreen");
                      },
                      function (error) {
                        // An error happened.
                      }
                    );
                }}
              />
            </>
          )}
        </>
      )}
      {RenderIf(
        user.developer == true,
        <>
          <TabBar
            style={{ marginVertical: "3%" }}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab icon={NewIcon} />
            <Tab icon={HomeIcon} />
            <Tab icon={AccountIcon} />
            <Tab icon={SettingsIcon} />
          </TabBar>
          {RenderIf(
            selectedIndex == 0,
            <FlatList
              ListHeaderComponent={() => (
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
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: "1.5%" }} />
              )}
              data={posts}
              keyExtractor={(post) => post.id.toString()}
              renderItem={({ item }) => (
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
                        email: item.email,
                        name: item.name,
                      },
                    })
                  }
                  title={item.title}
                  votes={item.votes}
                  description={item.description}
                  budget={item.budget}
                />
              )}
            />
          )}
          {RenderIf(
            selectedIndex == 1,
            <FlatList
              ListHeaderComponent={() => (
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
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: "1.5%" }} />
              )}
              data={myPosts}
              keyExtractor={(myPost) => myPost.id.toString()}
              renderItem={({ item }) => (
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
                        email: item.email,
                        name: item.name,
                      },
                    })
                  }
                  title={item.title}
                  votes={item.votes}
                  description={item.description}
                  budget={item.budget}
                />
              )}
            />
          )}
          {RenderIf(
            selectedIndex == 2,
            <>
              <ExtendedButton
                title="Account Information"
                tabIcon={AccountIcon}
                onPress={() =>
                  navigation.navigate("InfoScreen", {
                    user: user,
                  })
                }
              />
              <ExtendedButton
                title="PayPal"
                tabIcon={PayPalIcon}
                onPress={() =>
                  navigation.navigate("InfoScreen", {
                    user: user,
                  })
                }
              />
              <ExtendedButton
                style={{ marginTop: "1%" }}
                title="New Project"
                tabIcon={PlusIcon}
                onPress={() =>
                  navigation.navigate("NewProject", {
                    user: user,
                  })
                }
              />
              <ExtendedButton
                title="Earnings"
                tabIcon={EarningsIcon}
                onPress={() =>
                  navigation.navigate("EarningScreen", {
                    user: user,
                  })
                }
              />
              <ExtendedButton
                title="Insights"
                tabIcon={InsightsIcon}
                onPress={() =>
                  navigation.navigate("InsightScreen", {
                    user: user,
                  })
                }
              />
            </>
          )}
          {RenderIf(
            selectedIndex == 3,
            <>
              <ExtendedButton
                title="Dark Mode"
                tabIcon={DarkIcon}
                onPress={themeContext.toggleTheme}
              />
              <ExtendedButton title="Notifications" tabIcon={BellIcon} />
              <ExtendedButton
                title="Log Out"
                tabIcon={LogOutIcon}
                onPress={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then(
                      () => {
                        navigation.navigate("LoginScreen");
                      },
                      function (error) {
                        // An error happened.
                      }
                    );
                }}
              />
            </>
          )}
        </>
      )}
    </ScreenVariant>
  );
}

export default Home;
