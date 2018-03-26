import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text, Alert } from "react-native";
import { Container, Header, Content, Button, Icon } from "native-base";

import OrderAccordion from "./order/OrderAccordion";
import ListItemOrder from "./order/ListItemOrder";
import Card from "./common/Card";
var { height, width } = Dimensions.get("window");

export default class ButtonIconExample extends Component {
  constructor() {
    super()
  }
  handleOpenCamera() {
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.containerStyle}>
        <Header />
        <Content style={styles.contentStyle}>
          <Card
            title="Your Package Photo"
            IconButtonRight={
              <Button transparent onPress={() => navigate("CameraScreen")}>
                <Icon name="arrow-forward" />
              </Button>
            }
            photoTitle={true}
            style={styles.photoTitle}
          />
          <Card title="Enter contact number sender and receiver and note for the driver">
            <OrderAccordion navigation={this.props.navigation}/>
          </Card>
          <View style={{ backgroundColor: "white" }}>
            <ListItemOrder />
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: "green"
  },
  contentStyle: {
    // marginTop: 30,
    // marginLeft: 30,
    // marginRight: 30,
    // marginBottom: 30,
    // backgroundColor: "yellow",
    flex: 1
  },
  photoTitle: {
    fontSize: 300,
    fontWeight: "bold"
  },
  textStyle: {
    flex: 1,
    // backgroundColor: "powderblue",
    width: width / 2,
    flexDirection: "row"
  }
});
