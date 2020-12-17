import React, { createContext, useContext } from 'react';

import VFChain from '../services/vfchain';

const VFChainContext = createContext({});

function VFChainProvider({ children }) {
    const vfchain = VFChain();
    
    return (
        <VFChainContext.Provider value={vfchain}>
            {children}
        </VFChainContext.Provider>
    );
}

const useVFChain = () => useContext(VFChainContext);

export {
    VFChainProvider,
    useVFChain,
};
