import React, { useState } from "react";


//======== 초기 count값을 파라미터로 받아서 증가밑 감소를 편리하게 해주는 hook
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
