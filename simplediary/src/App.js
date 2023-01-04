import { useRef, useState , useEffect, useMemo, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";


const App = () => {

  const [data, setData] = useState([]); //초기값을 배열로 만들어줌

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

    setData(initData);
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
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1; //====[4강]. id 데이터를 +1해서 넣기
    
    setData((data) => [newItem, ...data]); //==== [12강] 값이 아니라 함수로 리턴해도됨
  },[]);

   /** 삭제 일어났을때 사용하는 function*/
   const onRemove = useCallback((tagetId) => {
    
    /* 최적화하면서 아래 소스로 바뀜
    const newDiaryList = data.filter((it)=> it.id !== tagetId);
    setData(newDiaryList);
    */

    setData((data) => data.filter((it)=> it.id !== tagetId));
  },[]);

   /** 수정 일어났을때 사용하는 function*/
  const onEdit = useCallback((targetId, newContent) => {
    
    setData( (data) => 
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );

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

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};
export default App;
