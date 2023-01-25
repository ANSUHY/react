import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeName, addCount } from "./../store.js"


function Cart() {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();

    return (
        <>
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