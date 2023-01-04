import { useRef, useState , useEffect, useMemo } from "react";
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

  /** MOUNT된 시점에 사용_리스트데이터가져와서 뿌리기 */
  useEffect(() => {
    //setTimeout(() => {
      getData();
    //}, 1500);
  }, []);

  /** 저장이 일어났을때 사용하는 function*/
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1; //====[4강]. id 데이터를 +1해서 넣기
    
    setData([newItem, ...data]);
  };

   /** 삭제 일어났을때 사용하는 function*/
   const onRemove = (tagetId) => {
    const newDiaryList = data.filter((it)=> it.id !== tagetId);

    setData(newDiaryList);
  };

   /** 수정 일어났을때 사용하는 function*/
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  /** 기분 분석 값 반환 _ useMemo를 씀 : [data.length] 변화할때만 내부function 사용됨*/
  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }
    console.log("일기 분석 시작");

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
