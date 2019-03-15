import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Greeting extends React.Component {
  render() {
    return (
      <View style={styles.GreetingContainer}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View style={styles.container}>
        <Image style={styles.bananaImage} source={pic} />
        <Greeting name={"Rontend"} />
        <Greeting name={"AJ"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bananaImage: {
    width: 250,
    height: 180
  },
  GreetingContainer: {
    alignItems: "center"
  }
});
