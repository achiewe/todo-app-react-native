/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainTodo from './components/MainTodo';
import RenderItem from './components/RenderItem';

function App(): JSX.Element {
  return (
    <View style={styles.MainContainer}>
      <MainTodo />
      <RenderItem />
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
    gap: 15,
  },
});

export default App;
