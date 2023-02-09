// Counter.js
import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { countState } from "../states/atoms";

export const Counter = () => {
  
  //================ atom 사용하기
  const [count, setCount] = useRecoilState(countState); //atoms.js에서 선언한 값
  const resetCount = useResetRecoilState(countState); //atoms.js에서 선언한 값

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    resetCount();
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default Counter;
