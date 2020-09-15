export function increment() {
  return {
    type: "Increment",
  };
}
export function decrement() {
  return {
    type: "Decrement",
  };
}
export function multiply() {
  return {
    type: "Multiply",
  };
}
export function divide() {
  return {
    type: "Divide",
  };
}
export function reset() {
  return {
    type: "Reset",
  };
}

export function nameSet(un) {
  return {
    type: "Name",
    payload: un,
  };
}
