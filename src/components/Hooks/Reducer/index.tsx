import { FunctionComponent, useReducer } from "react";
import Head1 from "../../Head1";
import Button from "../../Button";

interface ReducerProps {}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "state 10"; payload: number };

const initialState = {
  count: 0,
};

const counter = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "state 10":
      return { count: action.payload };
    default:
      return state;
  }
};

const Reducer: FunctionComponent<ReducerProps> = () => {
  const [state, dispatch] = useReducer(counter, initialState);
  return (
    <>
      <Head1>Count: {state.count}</Head1>
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      <br />
      <Button onClick={() => dispatch({ type: "decrement" })}>Decrement</Button>
      <br />
      <Button onClick={() => dispatch({ type: "state 10", payload: 10 })}>
        Set count 10
      </Button>
    </>
  );
};

export default Reducer;
