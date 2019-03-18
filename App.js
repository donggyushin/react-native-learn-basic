import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            marginTop: 40,
            marginLeft: 40,
            fontSize: 20
          }}
          onChangeText={this.changeTextInput}
          placeholder={"Type here to translate!"}
        />
        <Text
          style={{
            padding: 10,
            fontSize: 20
          }}
        >
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
        <Button
          title={"Press Me"}
          onPress={this.onPressButton}
          color={"purple"}
        />
        <TouchableHighlight onPress={this.onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          underlayColor={"white"}
          onPress={this.onPressButton}
          onLongPress={this.onLongPressButton}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              TouchableHighlight with Long Press
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  onPressButton = () => {
    Alert.alert("You tapped the button!");
  };

  onLongPressButton = () => {
    Alert.alert("You long-pressed the button!");
  };

  changeTextInput = text => {
    this.setState({
      text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    alignItems: "center"
  },
  button: {
    width: 260,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 15
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
