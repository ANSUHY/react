import CONST from 'src/assets/js/const';
// import 'src/css/CustomField.css';

function CustomField(props) {
    return (
        <div className="CustomField Board">
            <div className="Title">{CONST.TEXT.SETTING}</div>
            <div className="Item Radius2"></div>
        </div>
    )
}

export default CustomField;
