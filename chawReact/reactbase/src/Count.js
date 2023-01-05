import React, {useState} from 'react'; //====useState를 사용하기위해 import
import OddEvenReuslt from './OddEvenReuslt';

/**
    ========================================================================
    const Counter = (props)

    -props는 이걸 사용하는곳에서 지정한 값들(App.js안에  <Counter>태그안에 있는 모든 값들) 
        → 태그안에 넘긴 값을 쓰고싶으면 prpos.initalValue 이런식으로 써야함
    -만약에 하나만 사용해도 된다하면 {initalValue} 로 넣어주고 아래에서 바로 쓸수있음
*/
const Counter = (props) =>{

    let initalValue = props.initalValue //또는 (props) 이부분을 ({initalValue}) 이렇게 변경해주면됨
   
    const [count, setCount] = useState(initalValue); 
    const onIncrease = () =>{
        setCount(count + 1); //count에 +1 을 해서 셋팅
    }
    const onDecrease = () =>{
        setCount(count - 1); //count에 -1 을 해서 셋팅
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenReuslt count={count}/>
        </div>
    );
};

Counter.defaultProps = { //=======오류를 방지하기 위해 defaultProps를 설정할수 있음
    initalValue : 5
}

export default Counter;