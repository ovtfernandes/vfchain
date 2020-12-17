import React, { createContext, useContext, useState } from 'react';

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
