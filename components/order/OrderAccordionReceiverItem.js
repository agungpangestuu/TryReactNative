import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import InputOrderAccordionItem from "./InputOrderAccordionItem";

export default class OrderAccordionReceiverItem extends Component {
  render() {
    return (
      <View style={styles.root}>
        <InputOrderAccordionItem title="ini accordion receiver item"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 200,
    // marginBottom: 20,
    // backgroundColor: "orange"
  }
});
