import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Navigation } from "react-native-navigation";

export default function Home({ navigation }) {
  const [gallery, setgallery] = useState([
    {
      image: { uri: require("../assets/travel1.jpg") },
      title: "Switzerland",
      key: "1",
    },
    {
      image: { uri: require("../assets/travel2.jpg") },
      title: "New Zeland",
      key: "2",
    },
    {
      image: { uri: require("../assets/travel5.jpg") },
      title: "Rome",
      key: "3",
    },
    {
      image: { uri: require("../assets/travel4.jpg") },
      title: "Tahiti",
      key: "4",
    },
  ]);

  const goToPost = () => {
    navigation.navigate("Post");
  };

  const recentImage = { uri: require("../assets/travel1.jpg") };
  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={require("../assets/back.jpg")}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hey Fidellis</Text>
            <Text style={styles.userText}>Where would you like to go tj</Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 60, opacity: 0.6 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 30, right: 30 }}
          />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVerical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 11,
                      }}
                    />
                    <View style={styles.imageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.ImageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Recently Viewed
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#ff200" }}>
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "92%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
              opacity: 0.7,
            }}
          />
          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={{ margiLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}
              >
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Venice,the capital city of northen İtaly's Veneto Region in the
              Adriatic Sea
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    borderBottomRightRadius: 65,
    opacity: 0.2,
  },
  UserGreet: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  imageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    botton: 10,
  },
  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});
