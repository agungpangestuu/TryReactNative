import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "native-base";

export default class BaseCard extends Component {
  render() {
    const { children, iconRight, title, IconButtonRight, iconLeft } = this.props;
    return (
      <Card style={styles.root}>
        <View style={styles.titleWraper}>
          {title && <Text>{iconLeft &&  <Icon name={iconLeft} /> } {title}</Text>}
          {iconRight && <Icon name={iconRight} />}
          {IconButtonRight }
        </View>
        {children}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
    root: {
        padding: 8,
    },  
  titleWraper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
