import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleNo, setTitleNo] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i} >
              <h4 onClick={() => { setModal(true); setTitleNo(i); }}>{a} {/**===== 1. state변경 */}
                <span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍 {따봉[i]} </span>
              </h4>
              <p>2월 18일 발행</p>

              {/**===== 삭제 기능 */}
              <button onClick={() => {

                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);

                let copy2 = [...따봉];
                copy2.splice(i, 1);
                따봉변경(copy2);

              }}>삭제</button>

            </div>

          )
        })
      }

      {
        modal == true ?
          <Modal titleNo={titleNo} 글제목={글제목} /> /**===== 2. state변경되면서 탐 & props로 넘겨줌 */
          :
          null
      }

      {/**===== 발행 기능 */}
      <div>
        <input onChange={(e) => { 입력값변경(e.target.value) }} />
        <button onClick={() => {

          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)

          let copy2 = [...따봉];
          copy2.unshift(0);
          따봉변경(copy2);

        }}>글발행</button>
      </div>


    </div>
  )

}

function Modal(props) { /**===== 3. props 사용 */
  return (
    <div className="modal">
      <h4>{props.글제목[props.titleNo]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
