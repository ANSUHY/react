// DogImage2.js
import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { randomDog2 } from "../states/selectors";
import { Loading } from "../components/Loading";

export const DogImage2 = () => {
    
  const imageUrlLoadable = useRecoilValueLoadable(randomDog2);

  const render = () => {

    switch (imageUrlLoadable.state) {
      case "loading":
        return <Loading />;
      case "hasError":
        throw imageUrlLoadable.contents;
      default:
        return (
          <div>
            <img
              src={imageUrlLoadable.contents} alt="" width="100px" height="100px" />
          </div>
        );
    }
  };

  return render();
};
