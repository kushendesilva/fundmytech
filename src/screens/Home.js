import { Text, TabBar, Tab, Icon } from "@ui-kitten/components";
import React from "react";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import RegularPost from "../components/RegularPost";
import DeveloperPost from "../components/DeveloperPost";
import RenderIf from "../components/RenderIf";
import { Posts, Users } from "../database";

function Home({ navigation, route }) {
  const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
  const NewIcon = (props) => <Icon {...props} name="trending-up-outline" />;
  const { user } = route.params;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ marginBottom: "2%" }}>
            {RenderIf(
              user.type == "Donator",
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
              user.type == "Developer",
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
        data={Posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <>
            {RenderIf(
              user.type == "Donator",
              <RegularPost
                onPress={() => navigation.navigate("ProjectScreen")}
                title={item.title}
                votes={item.votes}
                description={item.description}
                budget={item.budget}
              />
            )}
            {RenderIf(
              user.type == "Developer",
              <>
                {RenderIf(
                  selectedIndex == 0,
                  <RegularPost
                    onPress={() => navigation.navigate("ProjectScreen")}
                    title={item.title}
                    votes={item.votes}
                    description={item.description}
                    budget={item.budget}
                  />
                )}
                {RenderIf(
                  selectedIndex == 1,
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
          </>
        )}
      />
    </Screen>
  );
}

export default Home;
