import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { WardenDashboard } from './Warden/WardenDashboard';
import { RenewComponent, AddComponent, RegistrationComponent } from './Warden/WardenComponents';
import { Login } from './Login/Login';
import { StudentDashboard} from './Student/StudentDashboard';
import { ServicesComponent, ProfileComponent, DuesComponent } from './Student/StudentComponents';

function RouterComponent() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/warden" component={WardenDashboard} />
                <Route exact path="/warden/renew" component={RenewComponent} />
                <Route exact path="/warden/add" component={AddComponent} />
                <Route exact path="/warden/registration" component={RegistrationComponent} />
                <Route exact path="/student" component={StudentDashboard} />
                <Route exact path="/student/services" component={ServicesComponent} />
                <Route exact path="/student/profile" component={ProfileComponent} />
                <Route exact path="/student/dues" component={DuesComponent} />
                <Redirect to="/login" />
            </Switch>
        </div>
    );
}

export function RouteTo({ name }) {
    if (name.toLowerCase() === "warden") {
        return (
            <Redirect to="/warden"/>
        );
    } else {
        return (
            <Redirect to="/student" />
        );
    }
}; 


export default withRouter(RouterComponent);
