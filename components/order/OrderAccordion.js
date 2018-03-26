import React, { Component } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import Accordion from "react-native-collapsible/Accordion";


import {Card} from '../common/Card'
import OrderAccordionHeader from "./OrderAccrodionHeader";
import OrderAccordionReceiverItem from "./OrderAccordionReceiverItem";
import OrderAccordionSenderItem from "./OrderAccordionSenderItem";

export default class OrderAccordion extends Component {
  handlePress() {
    Alert.alert("asaas", "asasas");
  }

  _renderHeader = (section, i, isActive, sections) => {
    return (
      <View>
        
        <OrderAccordionHeader
          iconLeft="ios-pin"
          title={section.title}
          index={i}
          isActive={isActive}
          navigation={this.props.navigation}
          {...section}
        />
      </View>
    );
  };

  _renderContent = (Section, i, isActive, sections) => {
    return i === 0 ? (
      <OrderAccordionSenderItem />
    ) : (
      <OrderAccordionReceiverItem />
    );
  };

  render() {
    return (
      <View>
        <Accordion
          sections={[
            {
              title: "Sender",
              subtitle: "Jl. Sudirman No 1"
            },
            {
              title: "Receiver 1",
              subtitle: "Jl. Pamoyanan No 14"
            },
            {
              title: "Receiver 2",
              subtitle: "Jl. Ini sangat panjang sekali. tidak cocok untuk ibu hamil atau menyusui"
            }
          ]}
          touchableComponent={TouchableOpacity}
        // underlayColor='grey'	
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </View>
    );
  }
}
