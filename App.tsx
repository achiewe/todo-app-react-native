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
import {Provider} from 'react-redux';
import store from './features/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.MainContainer}>
        <MainTodo />
        <RenderItem />
      </View>
    </Provider>
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
