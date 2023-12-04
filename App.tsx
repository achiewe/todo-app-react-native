/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainTodo from './components/MainTodo';

function App(): JSX.Element {
  return (
    <View style={styles.MainContainer}>
      <MainTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default App;
