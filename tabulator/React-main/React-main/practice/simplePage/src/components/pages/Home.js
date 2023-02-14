import Navigation from "src/components/utilities/Navigation";
import CONST from 'src/assets/js/const';
import Router from 'src/assets/js/router';
import 'src/css/pages/Home.css';


function Home(props) {
    const navItem = Router.filter(ob => ob.name === CONST.ROUTER.NAME.MAIN);

    return (
        <div className="Home">
            <div className="SizeRes26">{CONST.ROUTER.NAME.HOME}</div>
            <Navigation class="ColorPrimary ButtonDarken Size26" item={navItem}></Navigation>
        </div>
    )
}

export default Home;
