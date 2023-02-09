//App.js

import React, { Suspense } from "react";
import { RecoilRoot } from 'recoil';
import { Counter } from './components/Counter';
import { CounterInfo } from './components/CounterInfo';
import { Loading } from "./components/Loading";
import { DogImage1 } from "./components/DogImage1";
import { DogImage2 } from "./components/DogImage2";
import { DogImage3 } from "./components/DogImage3";

const App = () => {
  return (
    <RecoilRoot>
     
      <Counter />
      <CounterInfo/>

      
      {/* //=========[[1]] RadomDog 컴포넌트를 Suspense로 감싸 fallback에 로딩 중 컴포넌트를 추가 */}
      <Suspense fallback={<Loading />}>
        <h1>~~~~~~~[[1]] 비동기 처리 해보기 1</h1>
        <DogImage1 />
      </Suspense>

      {/* //=========[[2]] */}
      <h1>~~~~~~~[[2]] 비동기 처리 해보기 2</h1>
      <DogImage2 />

      {/* //=========[[3]] */}
      <h1>~~~~~~~[[3]] 비동기 처리 해보기 3</h1>
      <Suspense fallback={<Loading />}>
        <DogImage3 breed="beagle" />
        <DogImage3 breed="pug" />
        <DogImage3 breed="shiba" />
      </Suspense>

    </RecoilRoot>
  );
}

export default App;