import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Radio,
  Button,
  Icon
} from "native-base";

import { CashAction, BilledAction, WalletAction } from "../store/actions";

class ListItemOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashPay:true,
        billedpay: false,
        walledpay: false,
        radioSender : true,
        radioReceiver: false
    };
  }
  handleListPay() {
    Alert.alert('hjhjh', 'asnjka')
    
    // this.setState({billedpay: true})
  }
  handleRadioButton() {
      this.state.radioReceiver ? this.setState({radioReceiver: true}) : console.log('daa')
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem style={styles.detailListItem}>
              <View>
                <Text style={styles.titleListOrder}>Price</Text>
                <Text style={styles.titleListOrder}>Door To Door(Driver)</Text>
              </View>
              <View>
                <Text>IDR. 200.000</Text>
                <Text>IDR. 50.000</Text>
              </View>
            </ListItem>
            <ListItem style={styles.totalListItem}>
              <View style={styles.titleOrder}>
                <Text style={styles.colorItem}>Total Payment</Text>
              </View>
              <View style={styles.titleRight}>
                <Text style={[styles.colorItem, styles.customFontSize]}>
                  IDR. 250.000
                </Text>
              </View>
            </ListItem>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Responsible For Pay</Text>
            </View>

            <ListItem
              style={{
                marginLeft: 0,
                flexDirection: "row",
                flex: 1
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <Radio selected={this.state.radioSender} onPress={() => this.setState({radioReceiver: false, radioSender: true})} style={{ marginRight: 7 }} />
                <Text style={{ marginRight: 20 }}>Sender</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Radio selected={this.state.radioReceiver} onPress={() => this.setState({radioReceiver: true, radioSender: false})} style={{ marginRight: 7 }} />
                <Text>Receiver</Text>
              </View>
            </ListItem>

            <View style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Pay With</Text>
            </View>

            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around"
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {this.state.cashPay ? (
                  <Button
                    bordered
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                  >
                    <Icon name="ios-cash" style={{ fontSize: 50 }} />
                    <Text>Cash</Text>
                  </Button>
                ) : (
                  <Button
                    bordered
                    dark
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                    onPress={() => this.setState({walledpay: false, cashPay: true, billedpay:false})}
                  >
                    <Icon name="ios-cash" style={{ fontSize: 50 }} />
                    <Text>Cash</Text>
                  </Button>
                )}
              </View>
              <View style={{ flexDirection: "row" }}>
                {this.state.walledpay ? (
                  <Button
                    bordered
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                  >
                    <Icon name="md-albums" style={{ fontSize: 50 }} />
                    <Text>Wallet</Text>
                  </Button>
                ) : (
                  <Button
                    bordered
                    dark
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                    onPress={() => this.setState({walledpay: true, cashPay: false, billedpay:false})}
                  >
                    <Icon name="md-albums" style={{ fontSize: 50 }} />
                    <Text>Wallet</Text>
                  </Button>
                )}
              </View>
              <View style={{ flexDirection: "row" }}>
                {this.state.billedpay ? (
                  <Button
                    bordered
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                  >
                    <Icon name="ios-card" style={{ fontSize: 50 }} />
                    <Text>Billed</Text>
                  </Button>
                ) : (
                  <Button
                    bordered
                    dark
                    style={{
                      flexDirection: "column",
                      alignContent: "center",
                      width: 100,
                      height: 90
                    }}
                    onPress={() => this.setState({walledpay: false, cashPay: false, billedpay:true})}
                  >
                    <Icon name="ios-card" style={{ fontSize: 50 }} />
                    <Text>Billed</Text>
                  </Button>
                )}
              </View>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
              <Button block primary>
                <Text>order</Text>
              </Button>
            </View>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  detailListItem: {
    marginRight: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  totalListItem: {
    marginLeft: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  colorItem: {
    color: "indigo"
  },
  titleOrder: {
    marginLeft: 20
  },
  titleRight: {
    marginRight: 30
  },
  customFontSize: {
    fontSize: 20
  },
  titleListOrder: {
    alignSelf: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    getStatus: state.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleWalletPay: () => dispatch(WalletAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItemOrder)