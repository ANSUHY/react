import './App.css';
import bg from './bg.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from "react-query";
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import data from './data.js';


function App() {

  let result = useQuery('작명', () => /** ==========1. 불러오기 */
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a) => { return a.data })
  )

  let [shoes] = useState(data);

  return (
    <div className="App">

      <div> { /** ==========2. 사용 */}
        {result.isLoading && '로딩중'}
        {result.error && '에러남'}
        {result.data && result.data.name + '님 반가워요'}
      </div>

      {/* 메뉴 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/**  페이지 지정 */}
      <Routes>
        <Route path="/" element={
          <>
            /* 메인메뉴 */
            < div >
              <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            </div>

            /* component사용해서 이미지 보기 */
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                      <Card key={i} shoes={shoes[i]} i={i} ></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />


        <Route path="/detail/:id" element={< Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes >

    </div >

  );
}

function Card(props) {

  let navigate = useNavigate();

  return (
    <div className="col-md-4" onClick={() => { navigate(`/detail/` + props.i) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (Number(props.i) + Number(1)) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div >
  )
}

export default App;
