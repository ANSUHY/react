import React, { useEffect, useState } from "react";



/** CountA가 변화할때 쓰이는 컴포넌트 */
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CountA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

/** CountB가 변화할때 쓰이는 컴포넌트 */
 /* [11강] 
 만약에  CountA처럼 React.memo(({ obj }) ~)이런식으로 하게된다면 
 얉은 비교가 되어 console이 계속 찍히게됨 따라서 areEqual 이런식으로 쓰여야함*/
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CountB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

/** 이전값과 지금값 비교 (주소에 의한 비교가 아닌 값비교함_https://ko.reactjs.org/docs/react-api.html#reactmemo) */
const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true; //이전 프롭스 = 현재프롭스 → 리렌더링을 일으키지않게됨
  }
  return false; //이전 프롭스 != 현재프롭스 → 리렌더링을 일으키게됨
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: 1 })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
