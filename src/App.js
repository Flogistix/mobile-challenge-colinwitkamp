import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";

import store from "./store";
import { fetchMeteorites, selectMeteorites } from "./store/meteorite";
import { FlatList } from "react-native-gesture-handler";

function App() {
  const dispatch = useDispatch();
  const meteorites = useSelector(selectMeteorites);
  
  useEffect(() => {
    dispatch(fetchMeteorites());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Meteorites</Text>
      <FlatList
        style={styles.list}
        data={meteorites}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.name}>{item.id}. {item.recclass} - {item.name}</Text>
              <Text style={styles.desc}>{item.fall} - {new Date(item.year).getFullYear()}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    marginTop: "2%",
    fontSize: 20,
  },
  list: {
    width: '90%',
    flex: 1,
  },
  item: {
    marginVertical: 4,
    borderColor: '#e2e2e2',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  desc: {
    color: '#a0a0a0',
    marginTop: 8
  }
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
