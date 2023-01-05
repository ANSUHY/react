
import './App.css';
import Container from './Container';
import Counter from './Count';



function App() { 

  const counterProps = {
    a : 1,
    b : 2,
    c : 3, 
    initalValue : 5
  }


  /**
   =============================================================
   props넘기는 방법 2가지
  1. 개체 생성해 {...} 로 넘겨주기 
     <Counter {...counterProps}/>
  2. 아예 안에 넣기 
    <Counter a={1} b={2} c={3} initalValue={7} />
    
  */
  return (
      <Container>
        <div>
          <Counter {...counterProps}/>  
        </div>
      </Container> 
  );
}

export default App; 