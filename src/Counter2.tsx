import React, { useReducer } from 'react'

type Action = { type: "INCREASE" } | { type: "DECREASE" };
// 액션을 나열해준다.
// 액션 객체에 필요한 다른 값들이 있는 경우, 다른 값들도 타입안에 명시해준다.

const reducer = (state : number, action : Action) => {
  switch (action.type) {
    case 'INCREASE' :
      return state + 1;
    case 'DECREASE' :
      return state -1;
    default :
      throw new Error("Unhandled action")
  }
}

const Counter2 = () => {

  const [ count, dispatch ] = useReducer(reducer, 0)

  const onIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREASE" });
  }


  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter2;
