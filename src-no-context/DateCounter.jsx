import { useReducer } from "react";

const initialState = {count: 0, step: 1};

function reducer(state, action){
  switch(action.type){
    case "dec":
      return {...state, count: state.count - state.step};

    case "inc":
      return {...state, count: state.count + state.step};

    case "setCount":
      return {...state, count: action.payLoad};

    case "setStep":
      return {...state, step: action.payLoad};
    
    case "reset":
      return initialState;
  }
}


function DateCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {count, step} = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({type: "dec"});
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({type: "inc"});
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({type: "setCount", payLoad: Number(e.target.value)});
  };

  const defineStep = function (e) {
    dispatch({type: "setStep", payLoad: Number(e.target.value)});
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type: "reset"});
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
