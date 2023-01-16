import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4>{a} {/**=====또는  { 글제목[i] } </h4> */}
                <span onClick={() => { /**======= 리스트별로 따봉 따로해보기 */
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍 {따봉[i]} </span>
              </h4>
              <p>2월 18일 발행</p>
            </div>
          )
        })
      }

      { /** ===== setModal 에 따라 보이고 안보이고  */
        modal ?
          <Modal></Modal>
          :
          null
      }


    </div>
  )

}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
