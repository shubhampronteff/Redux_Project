import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import {
  increment,
  decrement,
  multiply,
  divide,
  reset,
  nameSet,
} from "../actions/index.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Counter1() {
  const [name, setName] = useState("");
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Count : {counter} </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
          marginBottom: 20,
        }}
      >
        <Button title="increase" onPress={() => dispatch(increment())} />
        <Button title="decrease" onPress={() => dispatch(decrement())} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
        }}
      >
        <Button title="multiply" onPress={() => dispatch(multiply())} />
        <Button title="divide" onPress={() => dispatch(divide())} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: 300,
        }}
      >
        <Button title="reset" onPress={() => dispatch(reset())} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: 300,
          marginTop: 20,
        }}
      >
        <TextInput
          style={{ width: 200, height: 30, borderWidth: 1 }}
          onChangeText={(text) => setName(text)}
        />
        <Button title="submit" onPress={() => dispatch(nameSet(name))} />
      </View>
    </View>
  );
}

export default Counter1;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
