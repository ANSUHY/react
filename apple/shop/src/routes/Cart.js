import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeName, addCount } from "./../store.js"
import { useState } from 'react';


function Child() {
    console.log('재렌더링됨')
    return <div>자식임</div>
}

function Cart() {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();

    let [count, setCount] = useState(0);

    return (
        <>
            <Child />
            <button onClick={() => { setCount(count + 1) }}> + </button>

            <button onClick={() => {
                dispatch(changeName())
            }}>버튼임</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={() => { dispatch(addCount(i)) }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    );
}

export default Cart;