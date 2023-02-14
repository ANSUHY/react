import Navigation from "src/components/utilities/Navigation";
import Router from 'src/assets/js/router';
import CONST from 'src/assets/js/const';
import 'src/css/layout/Header.css';

function Header(props) {
    const mainNav = Router.filter(ob => ob.meta.category === CONST.ROUTER.META.CATEGORY.MAIN)
    const subNav = Router.filter(ob => ob.meta.category === CONST.ROUTER.META.CATEGORY.SUB)

    return (
        <div className="Header MainGradient">
            <div className="Title ColorBrightest">{CONST.APPLICATION}</div>
            <div className="MainNav">
                <Navigation item={mainNav} class="ColorBrightest Button Size14"></Navigation>
            </div>
            <div className="SubNav">
                <Navigation item={subNav} class="ColorBrightest Button Size14"></Navigation>
            </div>
        </div>
    );
}

export default Header;
