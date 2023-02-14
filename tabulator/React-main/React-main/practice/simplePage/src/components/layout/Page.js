import Router from 'src/assets/js/router';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'src/css/layout/Page.css';

function Page() {
    let loggedIn = true;

    return (
        <div className="Page BodyBack">
            <Switch>
                {Router.map(ob => {
                    return <Route key={ob.name} exact path={ob.path}
                        render={() =>
                            (ob.meta.authorization && !loggedIn) ?
                                <Redirect to={ob.meta.redirect} /> : <ob.component />
                        } />
                })}
            </Switch>
        </div>
    );
}

export default Page;
