import React, {useReducer , useRef , useEffect, useMemo, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";



/** Context 사용 */
export const DiaryStateContext = React.createContext(null);//export default로 내보낼순없음
export const DiaryDispatchContext = React.createContext(null);

 /** 
 * ============= 
 * reducer   : useReducer을 사용하기위한 컴포넌트
 * =============

  첫번째 파라미터 : 상태변화가 일어나기직전 state
  두번째 파라미터 : 어떤 상태변화가 일어나야하는지 정보가 담겨져있음

  여기서 리턴하는 값이 useReducer 첫번째 인덱스의 값이 된다
  */
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId //반복문 돌려서 id비교해서 새로운 content만 올림
          ? {
              ...it,
              content: action.newContent
            }
          : it
      );
    }
    default:
      return state;
  }
};


const App = () => {

  /** 
    const [data, setData] = useState([]); //초기값을 배열로 만들어줌 대신에 사용
    복잡한 컴포넌트를 구분하기 위해

    대신 사용

   * ============= 
   * useReducer
   * =============
    첫번째 index : state
    두번째 index : 상태를 변화시키는 액션을 발생시키는 함수

    첫번째 파라미터 : reducer라는걸 꼭 전달해야한다. (일어난 상태 변화를 처리)
    두번째 파라미터 : 첫번째 index의 초기값
   */
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  /** 리스트 가져오는 function _ API사용해보기 */
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime() + 1,
        id: dataId.current++
      };
    });

    //setData(initData);
    dispatch({ type: "INIT", data: initData });
  };

  /** MOUNT된 시점에만 사용_리스트데이터가져와서 뿌리기 */
  useEffect(() => {
    //setTimeout(() => {
      getData();
    //}, 1500);
  }, []);

  /** 저장이 일어났을때 사용하는 function*/
  /**
   * useCallback을 씁시다!
   * 
   * -안쓰면 onCeate함수가 계속 재생성됨
   * -useMemo를 쓸수 없는 이유 : functino을 그대로 에디터에 보내줘야지 값을 반환해주는 useMemo는 필요없음
   * - 첫번째 인자 : 콜백함수가 작성완료를 눌렀을때 추가하는 함수
   *   두번째 인자 : 뎁스 인자 / 빈배열을 전달해줌으로 인해 MOUNT된 시점에만 사용
   */
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current }
    });

    dataId.current += 1; //id 데이터를 +1해서 넣기
  },[]);

   /** 삭제 일어났을때 사용하는 function*/
   const onRemove = useCallback((targetId) => {
    
    dispatch({ type: "REMOVE", targetId });

  },[]);

   /** 수정 일어났을때 사용하는 function*/
  const onEdit = useCallback((targetId, newContent) => {
    
    dispatch({ type: "EDIT", targetId, newContent });

  },[]);

  /** 기분 분석 값 반환 _ useMemo를 씀 : [data.length] 변화할때만 내부function 사용됨*/
  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  
  /** 리턴전에 list로 받기 */
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  /** 데이터를 Context를 이용하기위해 */
  const store = {
    data
  };

  /** funciton를 Context를 이용하기위해 : 재생성을 막기위해 useMemo씀*/
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  return (
    <DiaryStateContext.Provider value={store}>
      <DiaryDispatchContext.Provider value={memoizedDispatch}>
        <div className="App">
          <DiaryEditor onCreate={onCreate}/>
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};
export default App;
