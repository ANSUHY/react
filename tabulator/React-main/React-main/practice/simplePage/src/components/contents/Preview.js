// import 'src/css/Preview.css';
import { NavLink } from 'react-router-dom';
import CONST from 'src/assets/js/const';

function Preview(props) {
    return (
        <NavLink className="Preview BackColorBody" exact to={CONST.ROUTER.PATH.LIST}>
            <div className="ColorBrightest ButtonDarken">
                <div className="ColorPrimary Size14 Bold">{CONST.ROUTER.NAME.LIST}</div>
                <div>~~~~~</div>
                <div>~~~</div>
                <div>~~~~</div>
            </div>
        </NavLink>
    )
}

export default Preview;
