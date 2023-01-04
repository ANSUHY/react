import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} onEdit={onEdit} onRemove={onRemove}/> 
        ))}
      </div>
    </div>
    
  );
};

DiaryList.defaultProps = { //======= [3강] udefined등으로 인한 에러를 방지하기 위해 지정
  diaryList: []
};

export default DiaryList;
