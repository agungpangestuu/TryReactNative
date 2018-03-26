import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import OrderAccordion from "../order/OrderAccordion";
import Card from "../common/Card";

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>ini Order Confirm Item</Text>
        <Card title='Enter contact number sender and receiver and note for the driver'>
          <OrderAccordion />
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})