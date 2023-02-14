import Preview from 'src/components/contents/Preview';
import CONST from 'src/assets/js/const';
// import 'src/css/GridList.css';

function GridList(props) {
    return (
        <div className="GridList Board">
            <div className="Title">{CONST.TEXT.MY} {CONST.TEXT.WORD_LIST}</div>
            <div className="Item Radius2">
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
            </div>
        </div>
    )
}

export default GridList;
