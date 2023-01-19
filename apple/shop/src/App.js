import './App.css';
import bg from './bg.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail.js';


import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      {/* 메뉴 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/** ========= 페이지 지정 ================== */}
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
                      <Card key={i} shoes={shoes[i]} i={i + 1} ></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />

        {/** ========= 디테일 페이지가면서 ID넣어줌 */}
        < Route path="/detail/:id" element={< Detail shoes={shoes} />} />
      </Routes >

    </div >

  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
