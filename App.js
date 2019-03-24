import React from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.setModalVisiable = this.setModalVisiable.bind(this);
    this.popAlertUp = this.popAlertUp.bind(this);
    this.clickModalButton = this.clickModalButton.bind(this);
  }

  setModalVisiable(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    const { clickModalButton, popAlertUp } = this;
    const { modalVisible } = this.state;
    return (
      <View
        style={{
          marginTop: 22,
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={popAlertUp}
        >
          <View
            style={{
              marginTop: 22,
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#1abc9c"
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                Hello World!
              </Text>
              <TouchableHighlight
                underlayColor={"white"}
                onPress={clickModalButton}
                style={{
                  padding: 20,
                  backgroundColor: "#3498db"
                }}
              >
                <Text
                  style={{
                    color: "white"
                  }}
                >
                  Hide Modal
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          underlayColor={"white"}
          style={{
            padding: 20,
            backgroundColor: "#3498db"
          }}
          onPress={clickModalButton}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Show Modal
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  popAlertUp = () => {
    Alert.alert("Modal has been closed");
  };

  clickModalButton = () => {
    const { modalVisible } = this.state;
    const { setModalVisiable } = this;
    setModalVisiable(!modalVisible);
  };
}
