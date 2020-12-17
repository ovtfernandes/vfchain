import React from 'react';

import BlockView from '../components/block-view';
import { useVFChain } from '../contexts/vfchain';

function BlockchainViewer() {
    const vfchain = useVFChain();

    return (
        <div className="container">
            <h1>Blocks on chain</h1>
            <p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>

            {vfchain.getBlocks().map(block => <BlockView key={block.hash} block={block} />)}
        </div>
    );
}

export default BlockchainViewer;
