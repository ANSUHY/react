import React, { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  
  const { data }  = useContext(DiaryStateContext); //App.js에서 보낸 값
  
  return (
    
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      <div>
        {data.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} /> 
        ))}
      </div>
    </div>
    
  );
};

DiaryList.defaultProps = { //======= [3강] udefined등으로 인한 에러를 방지하기 위해 지정
  diaryList: []
};

export default DiaryList;
