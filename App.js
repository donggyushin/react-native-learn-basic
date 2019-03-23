import React from "react";
import { View, Button } from "react-native";

export default class App extends React.Component {
  render() {
    const { clickButton } = this;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          onPress={clickButton}
          title={"Learn More"}
          color={"#841584"}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

  clickButton = () => {
    console.log("you pressed button");
  };
}
