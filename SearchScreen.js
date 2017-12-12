import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
})

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
      </View>
    );
  }
}

module.exports = SearchScreen;