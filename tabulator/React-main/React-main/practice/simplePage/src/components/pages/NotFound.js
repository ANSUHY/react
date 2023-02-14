import Navigation from "src/components/utilities/Navigation";
import CONST from 'src/assets/js/const';
import Router from 'src/assets/js/router';
import 'src/css/pages/NotFound.css';

function NotFound(props) {
    const navItem = Router.filter(ob => ob.name === CONST.ROUTER.NAME.HOME);

    return (
        <div className="NotFound">
            <div className="SizeRes26">{CONST.TEXT.NOT_FOUND}</div>
            <Navigation class="ColorPrimary ButtonDarken Size26" item={navItem}></Navigation>
        </div>
    )
}

export default NotFound;
