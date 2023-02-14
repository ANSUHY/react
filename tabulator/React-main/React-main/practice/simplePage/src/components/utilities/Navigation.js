import { NavLink } from 'react-router-dom';
import 'src/css/contents/Navigation.css';

function Navigation(props) {
    return (
        <div className="Navigation">
            {props.item.map(ob =>
                <NavLink className={"NavItem " + props.class} exact to={ob.path} key={ob.path}>{ob.name}</NavLink>
            )}
        </div>
    );
}

export default Navigation;
