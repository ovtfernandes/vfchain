import React from 'react';

import Header from './components/header';
import { VFChainProvider } from './contexts/vfchain';

function App() {
    return (
        <VFChainProvider>
            <Header />
        </VFChainProvider>
    );
}

export default App;
