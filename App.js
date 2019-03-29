import React from "react";
import { View, StyleSheet, StatusBar, Keyboard, TextInput } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput onSubmitEditing={Keyboard.dismiss} placeholder={"asdasd"} />
      </View>
    );
  }

  _keyboardDidShow = () => {
    alert("Keyboard Shown");
  };

  _keyboardDidHide = () => {
    alert("Keyboard Hidden");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1dd1a1"
  }
});
