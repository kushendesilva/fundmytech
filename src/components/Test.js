import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

export default function BooksList() {
  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={require("../assets/project.png")}
            resizeMode="cover"
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text category="h6" style={{ fontWeight: "bold" }}>
              {title}
            </Text>
            <Text category="p2" status="primary" style={{ fontWeight: "bold" }}>
              Rs.{budget}
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Button
                accessoryLeft={UpVote}
                size="small"
                status="success"
                appearance="ghost"
              />
              <Text
                status="info"
                style={{ alignSelf: "center", fontWeight: "bold" }}
              >
                {votes}
              </Text>
              <Button
                accessoryLeft={DownVote}
                size="small"
                status="danger"
                appearance="ghost"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1B26" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 22 }}>Bestsellers</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
            data={books}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
