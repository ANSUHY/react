import { useParams, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "./../store.js"

function Detail(props) {

    let navigate = useNavigate();

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id
    });

    let [탭, 탭변경] = useState(0);  /** 이거에 따라 탭이 안에 내용을 바꿔볼거임 */

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + Number(1)}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: id, name: 찾은상품.title, count: 1 }))
                    }}>주문하기1</button>
                </div>
            </div>

            {/** 메뉴 만들어주기 + 누를때마다 탭변경사용 */}
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />{ /** prop으로 보내주기 */}

            <button onClick={() => {
                navigate("/cart")
            }}>카트</button>

        </div>
    )
}

function TabContent(props) { /** ==== prop으로 받은 내용 사용 */
    if (props.탭 === 0) {
        return <div>내용0</div>
    }
    if (props.탭 === 1) {
        return <div>내용1</div>
    }
    if (props.탭 === 2) {
        return <div>내용2</div>
    }

    /**
        === 위내용과 동일
        return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.탭]
    */
}

export default Detail;