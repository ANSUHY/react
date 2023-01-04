import { useRef, useState } from "react"; //==== 각기능을 사용하기위해 import

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef(); //=-== [2강] dom사용하기 위한 값 (input박스에 ref로 지정)
    const contentInput = useRef();//=-== [2강] dom사용하기 위한 값 (input박스에 ref로 지정)

    /** [1강] state묶은것 (작성자, 콘텐츠, 감정점수) */
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    /** [1강] onChange가 되면 쓰는 함수(state 묶은것으로 처리가 간편해짐) */
    const handleChangeState = (e) => {
        setState({
            ...state,   /** ==== [1강] 기존 값을 복사 */
            [e.target.name]: e.target.value /** ==== [1강] 변경된 값을 update */
        });
    };

    const handleSubmit = () => {

        /** [2강] 유효성 검사 _ 작성자 */
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }
        
        /** [2강] 유효성 검사 _ 콘텐츠 */
        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion); //========[4강] props로 받은 function 을 사용
        alert("저장 성공");
        setState({ //===[4강] 작성form리셋
            author: "",
            content: "",
            emotion: 1
        });
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput} /** ==== [2강] dom사용하기위해 지정 */
                    value={state.author}
                    onChange={handleChangeState} /** ==== [1강] 값이 바뀔때 handleChangeState 을 함 */
                    name="author"
                    placeholder="작성자"
                    type="text"
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    value={state.content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="일기"
                    type="text"
                />
            </div>
            <div>
                <span>오늘의 감정점수 : </span>
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};
export default DiaryEditor;
