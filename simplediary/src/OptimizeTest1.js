import React, { useEffect, useState } from "react";

/**=============================================
 * 
 * 
 * 
 * 써보고싶으면 App.js에
 *   <OptimizeTest1 /> 넣기
 * 
*/


/**  
이 소스 그대로 하면 text만 바뀌었음에도 CountView 도 같이 실행이 됨
const TextView = ({text}) =>{
  useEffect(() =>{
    console.log(`text Update - text : ${text}`);
  })
  return <div>{text}</div>
}

const CountView = ({count}) =>{
  useEffect(() =>{
    console.log(`count Update - count : ${count}`); 
  })
  return <div>{count}</div>
}
*/

/** React.memo를 썼기 때문에 안바뀌건 안바뀜 */
const TextView = React.memo(({text}) =>{
  useEffect(() =>{
    console.log(`text Update - text : ${text}`);
  })
  return <div>{text}</div>
})

/** React.memo를 썼기 때문에 안바뀌건 안바뀜 */
const CountView = React.memo(({count}) =>{
  useEffect(() =>{
    console.log(`count Update - count : ${count}`); 
  })
  return <div>{count}</div>
})

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count</h2>
        <CountView count={count}/>
        <button onClick={() => setCount(count+1)}>+1</button>
      </div>
      <div>
        <h2>Text</h2>
        <TextView text={text}/>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
