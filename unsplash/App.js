/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Trending from './components/Trending';
import { styles } from './styles/styles';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Welcome to Unsplash App!</Text>
          <Trending />
        </View>
      </ScrollView>
    );
  }
}
