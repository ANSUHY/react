// DogImage1.js
import React from "react";
import { useRecoilValue } from "recoil";
import { randomDog1 } from "../states/selectors";

export const DogImage1 = () => { 

  //===== [[1]] useRecoilValue()를 통해 컴포넌트에서 가져온 이미지 URL을 표시
  const imageUrl = useRecoilValue(randomDog1);

  return (
    <>
      <div>
        <img src={imageUrl} alt="" width="100px" height="100px" />
      </div>
    </>
  );
};
