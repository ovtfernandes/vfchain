import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import BlockchainViewer from './pages/blockchain-viewer';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={BlockchainViewer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
