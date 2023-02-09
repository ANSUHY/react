// DogImage3.js
import React from "react";
import { useRecoilValue } from "recoil";
import { dogsByBreed } from "../states/selectors";

export const DogImage3 = ({ breed }) => {

  const imageUrl = useRecoilValue(dogsByBreed(breed));
  console.log(imageUrl)

  return (
    <div>
      <img src={imageUrl} alt="" width="100px" height="100px" />
    </div>
  );
};