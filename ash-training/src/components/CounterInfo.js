// CounterInfo.js
import React from "react";
import { useRecoilValue } from "recoil";
import { countNextState } from "../states/selectors";

//================ selectort사용
export const CounterInfo = () => {
  const nextCount = useRecoilValue(countNextState);
  return <p>the next number is {nextCount}</p>;
};
