import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { increment, decrement } from "../actions/index.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Counter extends Component {
  render() {
    // console.log(this.props.count);
    return (
      <View style={styles.container}>
        <Text>Redux Counter</Text>

        <Text>{this.props.count}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 300,
          }}
        >
          <Button title="increase" onPress={() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button title="decrease" onPress={() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { increment: increment, decrement: decrement },
    dispatch
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
