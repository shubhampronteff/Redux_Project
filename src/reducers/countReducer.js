let count = 0;
export default function (state = count, action) {
  switch (action.type) {
    case "Increment":
      count++;
      break;
    case "Decrement":
      count--;
      break;
    case "Multiply":
      count = count * 5;
      break;
    case "Divide":
      count = count / 2;
      break;
    case "Reset":
      count = 0;
      break;
    case "Name":
      count = action.payload;
      break;
  }
  return count;
}
