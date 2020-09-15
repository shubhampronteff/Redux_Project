import React from "react";
import { StyleSheet } from "react-native";
import allReducers from "./src/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import Counter from "./src/components/counter";
// import Counter1 from "./src/components/Counter1.js";
import Hello from "./src/components/Hello";
const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
