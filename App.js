import React from "react";
import { View, Picker, Text } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "javascript"
    };
  }

  render() {
    const { onSelectChange } = this;
    return (
      <View
        style={{
          flex: 1,
          borderColor: "black",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            borderColor: "black",
            padding: 10,
            borderWidth: 1,
            borderRadius: 4
          }}
        >
          AJ
        </Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={onSelectChange}
          style={{
            borderColor: "red",
            width: "100%"
          }}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="node.js" value="nodejs" />
          <Picker.Item label="C#" value="c#" />
          <Picker.Item label="Ruby" value="ruby" />
        </Picker>
      </View>
    );
  }

  onSelectChange = (itemValue, itemIndex) => {
    this.setState({
      language: itemValue
    });
  };
}
