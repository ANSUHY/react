import React, { useEffect, useState } from "react";

/**=============================================
 * 
 * 
 * 
 * 써보고싶으면 App.js에
 *   <LifeCycle /> 넣기
 * 
*/
const UnMountTest = () => {
    /* ===== [7강] mount & unmount 되는 시점 */ 
    useEffect(() => {
        console.log("Sub Component Mount");
        return () => {
        console.log("Sub Component Unmount");
        };
    }, []);
    return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  /* ===== [7강] mount되는 시점 */
  useEffect(() => {
    console.log("Mount!");
  }, []);

  /* ===== [7강] update되는 시점 */
  useEffect(() => {
    console.log("Update!");
  });

  /* ===== [7강] array에 있는 값이 변경되는 시점_count */
  useEffect(() => {
    console.log(`count is update : ${count}`);

    //count가 5를 넘으면 알럿창뜨게
    if(count > 5){
        alert("5넘었습니다");
        setCount(1);
    }
  }, [count]);

  /* ===== [7강] array에 있는 값이 변경되는 시점_text */
  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={toggle}>ON/OFF BUTTON</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
