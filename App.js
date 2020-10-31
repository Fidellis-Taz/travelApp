import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";

console.disableYellowBox = true;

export default class App extends React.Component {
  state = {
    news: [],
    loading: true,
  };

  fetchNews = () => {
    fetch(`
http://newsapi.org/v2/top-headlines?country=lt&apiKey=bb11c9c17d134253800cf41eb24c8618`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchNews();
  }
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#333",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Top News</Text>
          </View>
          <View style={styles.news}>
            <FlatList
              data={this.state.news}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width: 50,
                      height: 180,
                      backgroundColor: "#fff",
                      marginBottom: 15,
                    }}
                  >
                    <Image
                      source={{ url: item.urlToImage }}
                      style={styles.absoluteFill}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
  },
  news: {
    alignSelf: "center",
    backgroundColor: "white",
  },
});
