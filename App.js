import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.powderblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  powderblue: {
    backgroundColor: "powderblue",
    flex: 1
  },
  skyblue: {
    backgroundColor: "skyblue",
    flex: 2
  },
  steelblue: {
    backgroundColor: "steelblue",
    flex: 3
  }
});
