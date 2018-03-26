import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import InputOrderAccordionItem from "./InputOrderAccordionItem";

export default class OrderAccordionSenderItem extends Component {
  render() {
    return (
      <View style={styles.root}>
        <InputOrderAccordionItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 180,
    // marginBottom: 20,
  }
});
