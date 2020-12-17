import React from 'react';

import { VFChainProvider } from './contexts/vfchain';
import Routes from './routes';

function App() {
    return (
        <VFChainProvider>
            <Routes />
        </VFChainProvider>
    );
}

export default App;
