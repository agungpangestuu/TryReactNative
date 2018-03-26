import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Item, Icon, Input } from "native-base";

export default class InputOrderAccordionItem extends Component {
  render() {
    return (
      <View style={styles.rootWraper}>
        <Container>
        <Content>
          <Item>
            <Icon active name="ios-contact" style={[styles.iconLeft, styles.senderIconColor]} />
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Icon active name="ios-call" style={[styles.iconLeft, styles.senderIconColor]} />
            <Input placeholder="Phone Number" />
          </Item>
          <Item>
            <Input placeholder="Note, Instruction, or Location Detail" />
          </Item>
        </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootWraper: {
    height: 180,
    marginLeft: 25,
    marginRight: 25,
  },
  iconLeft: {
    fontSize: 30,
  },
  senderIconColor: {
    color: "indigo"
  }
});
