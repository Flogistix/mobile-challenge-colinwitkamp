import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Switch,
  CheckBox
} from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";

import store from "./store";
import {
  fetchMeteorites,
  filterMeteorites,
  setMeteorLike,
  selectMeteoritesLikes,
  selectMeteorites,
} from "./store/meteorite";
import { FlatList } from "react-native-gesture-handler";

function App() {
  const [search, setSeartch] = useState("");
  const dispatch = useDispatch();
  const meteorites = useSelector(selectMeteorites);
  const likes = useSelector(selectMeteoritesLikes);

  useEffect(() => {
    dispatch(fetchMeteorites());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Meteorites</Text>
      <TextInput
        style={styles.search}
        placeholder="Search here"
        value={search}
        onChangeText={(txt) => {
          setSeartch(txt);
          dispatch(filterMeteorites(txt));
        }}
      />
      <FlatList
        style={styles.list}
        data={meteorites}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.item}>
              <View style={styles.info}>
                <Text style={styles.name}>
                  {item.id}. {item.recclass} - {item.name}
                </Text>
                <Text style={styles.desc}>
                  {new Date(item.year).getFullYear()}: {item.mass} - {item.fall}{" "}
                  , ({item.reclat}, {item.reclong})
                </Text>
              </View>
              <View style={styles.like}>
                <Pressable
                  onPress={() => {
                    dispatch(
                      setMeteorLike({
                        id: item.id,
                        like: !likes[item.id],
                      })
                    );
                  }}
                >
                  <Icon
                    name="heart"
                    color={likes[item.id] ? "#e00" : "#ddd"}
                    size={24}
                  />
                </Pressable>
              </View>
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
  search: {
    borderColor: "#e2e2e2",
    borderWidth: 0.5,
    width: "90%",
    fontSize: 16,
    padding: 8,
    borderRadius: 4,
    marginBottom: 12,
    marginTop: 8,
  },
  list: {
    width: "90%",
    flex: 1,
  },
  item: {
    marginVertical: 4,
    borderColor: "#e2e2e2",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    color: "#a0a0a0",
    marginTop: 8,
  },
  like: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
