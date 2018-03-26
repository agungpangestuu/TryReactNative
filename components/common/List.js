import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { List, ListItem, Text } from 'native-base';
export default class List extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem style={{marginRight: 30, flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
              <View>
                <Text>Kumar Pratik</Text>
                <Text>Kumar Pratik</Text>
              </View>
              <View>
                <Text>IDR. 200.000</Text>
                <Text>IDR. 50.000</Text>
              </View>
            </ListItem>
            <ListItem style={{marginLeft: 0, flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
              <View style={styles.titleOrder}>
                <Text style={styles.colorItem}>Total Payment</Text>
              </View>
              <View style={styles.titleRight}>
                <Text style={[styles.colorItem, styles.customFontSize]}>IDR. 250.000</Text>
              </View>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  colorItem: {
    color: 'indigo'
  },
  titleOrder: {
    marginLeft: 20,
  },
  titleRight: {
    marginRight: 30,
  },
  customFontSize: {
    fontSize: 20,
  }
})