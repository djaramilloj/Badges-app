import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Badges from '../pages/Badges.jsx';
import BadgeNew from '../pages/BadgeNew.jsx';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;