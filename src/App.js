import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux'

import store from './store'
import { fetchMeteorites } from './store/meteorite'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMeteorites())
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
}