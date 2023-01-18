import './App.css';
import bg from './bg.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';

import data from './data.js'; /** ===== 2. 변수 import */

function App() {

  let [shoes] = useState(data); /** ===== 3. import해온 변수 사용하기 */

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

      {/* 메인메뉴 */}
      <div>
        <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      </div>

      {/* component사용해서 이미지 보기 */}
      <div className="container">
        <div className="row">
          {
            shoes.map((a, i) => { /** ===== 4. map돌려서 컴포넌트에 [prop으로 한개의 객체] 보내서 생성 */
              return (
                <Card shoes={shoes[i]} i={i + 1} ></Card>
              )
            })
          }
        </div>
      </div>


    </div>

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
