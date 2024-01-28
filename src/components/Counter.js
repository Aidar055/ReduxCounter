import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/CounterAction";

const Counter = () => {
  const dispathc = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => dispathc(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispathc(decrement())}>-</button>
    </div>
  );
};

export default Counter;
