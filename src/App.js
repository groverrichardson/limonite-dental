import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.sass';
import { Route, Switch } from 'react-router-dom';
import HomePage from './routes/home-page';
import NotFound from './routes/not-found';
import ServicesPage from './routes/services-page';
import TeamPage from './routes/team-page';
import FinancingPage from './routes/financing-page';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/team" component={TeamPage} />
            <Route path="/financing" component={FinancingPage} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default App;
