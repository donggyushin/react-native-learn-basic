import React from "react";
import { View, StatusBar, Text, Switch } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true
    };
  }

  render() {
    const { onValueChange } = this;
    const { switchValue } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#3498db",
          alignItems: "center"
        }}
      >
        <StatusBar backgroundColor="black" barStyle={"light-content"} />
        <Switch onValueChange={onValueChange} value={switchValue} />
      </View>
    );
  }

  onValueChange = e => {
    console.log(e);
    this.setState({
      switchValue: e
    });
  };
}
