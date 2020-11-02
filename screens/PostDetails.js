import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Navigation } from "react-native-navigation";

export default function PostDetails() {
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
  const goBck = () => {
    navigation.goBck();
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        sour={{ uri: require("../assets/travel6.jpg") }}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.Tagline}>Discover Lithunia</Text>
        <Text style={styles.Placename}>
          Explore the scenic beauty of Lithunia
        </Text>
        <TouchableOpacity
          onPress={goBack}
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.BookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView style={{ backgroundColor: "white" }}>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About The Place
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ex
          eveniet nesciunt voluptatum quas, numquam odit, sapiente saepe quam
          veritatis consectetur tempora sequi nihil est, at ut fugiat eligendi
          quisquam ea blanditiis earum voluptatibus. Ab placeat doloremque vero
          laudantium corrupti.
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ex
          eveniet nesciunt voluptatum quas, numquam odit, laudantium corrupti.
        </Text>
        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.3,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          consectetur tempora sequi nihil est, at ut fugiat eligendi quisquam ea
          blanditiis earum voluptatibus. Ab placeat doloremque vero laudantium
          corrupti.
        </Text>
        <View>
          <Text
            style={{ paddingHorizontal: 14, fontSize: 20, fontWeight: "bold" }}
          >
            Suggested Places
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.darkOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: "absolute",
                        left: 10,
                        bottom: 10,
                      }}
                    />
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: "absolute",
                        left: 30,
                        bottom: 10,
                        color: "white",
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
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
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  Tagline: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  Placename: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BookTicketBtn: {
    position: "relative",
    right: 12,
    top: 350,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
    elevation: 5,
  },
  BookTicketText: {
    color: "white",
    fontSize: 14,
  },
  darkOverlay: {
    width: 150,
    height: 150,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
