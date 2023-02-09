// atoms.js
import { atom } from "recoil";

//================ atom 선언
export const countState = atom({
  key: "countState", // 전역적으로 고유한 값
  default: 0 // 초깃값
});