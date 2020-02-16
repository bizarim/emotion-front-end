import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import NoMatch from '../error/NoMatch';
import Footer from '../footer/Footer';
interface Props {

}
interface State {

}

const PublicRoute: React.FC<any> = ({ component: CustomComponent, loading, isLogged, ...res }) => {
    if(loading) {
        return (<div>loading</div>);
    }
    if(isLogged) {
        return (<div>isLogged</div>);
    }
    const renderCustomComponet = (props: any) => <CustomComponent {...props} />;
    return (<Route {...res} render={renderCustomComponet} />);
}

const PrivateRoute: React.FC<any> = ({ component: CustomComponent, loading, isLogged, ...res }) => {
    if(loading) {
        return (<div>loading</div>);
    }
    if(isLogged) {
        return (<div>isLogged</div>);
    }
    const renderCustomComponet = (props: any) => <CustomComponent {...props} />;
    return (<Route {...res} render={renderCustomComponet} />);
}

export default class Layout extends Component<Props, State> {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <PublicRoute exact={true} path='/' component={Home} />
                    <PrivateRoute path='/login' component={Login} />
                    <Route component={NoMatch} />
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}
