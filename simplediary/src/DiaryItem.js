import React, { useContext, useRef, useState, useEffect } from "react";
import { DiaryDispatchContext } from "./App";

/**
  ==========================================================================================
 const DiaryItem = ({ id, author, content, emotion, created_date }) 
  대신에  
 const DiaryItem = (props)
 쓸수있음

 대신에 밑에서 
  author → props.author
  {author} → {props.author} 이런식으로 쓸수 있음

  ======================================================
  리턴값에서 실제로 쓸때는 {}로 감싸줘야하는거 잊지마세요!  
  
*/
const DiaryItem = ({ id, author, content, emotion, created_date }) => {

    const { onRemove, onEdit } = useContext(DiaryDispatchContext);

    /** 언제 랜딩되는지 찍어보기 */
    useEffect(() => {
      console.log("DiaryItem 렌더 " , {id} , '번째 아이템 렌더');
    });

    const localContentInput = useRef();
    const [localContent, setLocalContent] = useState(content); //=== [6강] 기본 contents값을 넣어줌
    const [isEdit, setIsEdit] = useState(false);  //=== [6강] 수정인지 아닌지
    const toggleIsEdit = () => setIsEdit(!isEdit);  //=== [6강] isEdit이 true 였다면 false로 바뀌고 반대로 셋팅해주는 함수

    /** 삭제하기 눌렀을때 실행하는 함수 */
    const handleClickRemove = () => {
      if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
        onRemove(id);
      }
    };

    /** 수정취소 눌렀을때 실행하는 함수 */
    const handleQuitEdit = () => {
      setIsEdit(false);
      setLocalContent(content);
    };

    /** 수정 완료 눌렀을때 실행하는 함수 */
    const handleEdit = () => {
      if (localContent.length < 5) {
        localContentInput.current.focus();
        return;
      }
  
      if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
        onEdit(id, localContent);
        toggleIsEdit();
      }
    };

    return (
      
      <div className="DiaryItem">
        <div className="info">
          <span className="author_info">
            | 작성자 : {author} | 감정 : {emotion} | {/* */}
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
          {isEdit ? (
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          ) : (
            content
          )}
        </div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={handleClickRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
       
      </div>
    );
  };
  
  export default React.memo(DiaryItem);
  