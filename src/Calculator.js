import { useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
  result: "no result",
};

const CHECK_NUM_ONE = "CHECK_NUM_ONE";
const CHECK_NUM_TWO = "CHECK_NUM_TWO";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const CLEAR = "CLEAR";

const reducer = (state, action) => {
  if (action.type === "CHECK_NUM_ONE") {
    return { ...state, num1: action.number };
  }

  if (action.type === "CHECK_NUM_TWO") {
    return { ...state, num2: action.number };
  }

  if (action.type === "ADD") {
    return { ...state, result: state.num1 + state.num2 };
  }

  if (action.type === "SUBTRACT") {
    return { ...state, result: state.num1 - state.num2 };
  }

  if (action.type === "CLEAR") {
    return initialState;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: CHECK_NUM_ONE, number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: CHECK_NUM_TWO, number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: ADD })}>ADD</button>
        <button onClick={() => dispatch({ type: SUBTRACT })}>SUBTRACT</button>
        <button onClick={() => dispatch({ type: CLEAR })}>CLEAR</button>
      </div>
      <div>
        <h2>RESULT : {state.result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
