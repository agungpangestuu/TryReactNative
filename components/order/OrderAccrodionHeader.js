import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Icon, Button } from "native-base";

export default class OrderAccordionHeader extends Component {
  render() {
    const { iconLeft, title, subtitle, index, isActive } = this.props;
    const { navigate } = this.props.navigation
    return (
      <View style={styles.root}>
        <View style={styles.iconTitleWrapper}>
          <Button transparent style={{height: 30}} onPress={() => navigate('PickUpLocationScreen')}>
            <Icon
              name={iconLeft}
              style={[
                index === 0 ? styles.colorSender : styles.colorReceiver,
                styles.iconLeft
              ]}
            />
          </Button>
          <Text
            style={[
              styles.title,
              index === 0 ? styles.colorSender : styles.colorReceiver
            ]}
          >
            {title}
          </Text>
          <Icon
            style={styles.iconRight}
            name={isActive ? "ios-arrow-up" : "ios-arrow-down"}
          />
        </View>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 12,
    marginBottom: 10
    // backgroundColor: "blue"
  },
  iconTitleWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"

    // backgroundColor: 'green'
  },
  title: {
    fontSize: 17,
    // backgroundColor: "red",
    flex: 2,
    fontWeight: "bold"
  },
  subtitle: {
    // color: "gray"
    marginLeft: 25
  },
  iconLeft: {
    marginLeft: 0,
    marginRight: 7,//7
    fontSize: 30,
    paddingTop: 0,

  },
  iconRight: {
    alignSelf: "flex-start",
    color: "gray"
  },
  colorSender: {
    color: "indigo"
  },
  colorReceiver: {
    color: "orange"
  }
});
