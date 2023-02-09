// selectors.js
import { selector, selectorFamily } from "recoil";
import { countState } from "./atoms";

export const countNextState = selector({ 
  key: "counterNextState",
  get: ({ get }) => {
    return get(countState) + 1;
  }
});

//============== [[1]] dog이미지 비동기로 가져옴
export const randomDog1 = selector({ 
    key: "randomDog1",
    get: async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      return data.message;
    }
});

//============== [[2]] dog이미지 비동기로 가져옴
export const randomDog2 = selector({ 
    key: "randomDog2",
    get: async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      return data.message;
    }
});

//============== [[3]] dog이미지 비동기로 가져옴
export const dogsByBreed = selectorFamily({
    key: "dogsByBreed",
    get: (breed) => async () => {

        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const data = await response.json();
        return data.message;
    }
});