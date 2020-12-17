import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import BlockchainViewer from './pages/blockchain-viewer';
import Settings from './pages/settings';
import CreateTransaction from './pages/create-transaction';

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={BlockchainViewer} />
                <Route path="/settings" component={Settings} />
                <Route path="/new/transaction" component={CreateTransaction} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
