import React from 'react';

import Header from './components/header';
import BlockchainViewer from './pages/blockchain-viewer';
import { VFChainProvider } from './contexts/vfchain';

function App() {
    return (
        <VFChainProvider>
            <Header />
            <BlockchainViewer />
        </VFChainProvider>
    );
}

export default App;
