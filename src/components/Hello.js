import { Text, View } from "react-native";
import React from "react";
import Counter1 from "./Counter1";
import { useSelector } from "react-redux";

function Hello() {
  const counter = useSelector((state) => state.count);

  return (
    <View style={{ marginTop: 50, marginLeft: 30 }}>
      <Text>Hello</Text>
      <Text>Count : {counter}</Text>
      <Counter1 />
    </View>
  );
}

export default Hello;
