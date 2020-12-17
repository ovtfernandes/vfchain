import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import BlockchainViewer from './pages/blockchain-viewer';
import Settings from './pages/settings';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={BlockchainViewer} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
