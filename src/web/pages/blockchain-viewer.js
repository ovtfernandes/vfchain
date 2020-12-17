import React, { useState } from 'react';

import BlockView from '../components/block-view';
import TransactionsTable from '../components/transactions-table';
import { useVFChain } from '../contexts/vfchain';

function BlockchainViewer() {
    const vfchain = useVFChain();
    const blocks = vfchain.getBlocks();
    const [selectedBlock, setSelectedBlock] = useState(blocks[0]);

    return (
        <>
            <div className="container">
                <h1>Blocks on chain</h1>
                <p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>

                {blocks.map(block => (
                    <BlockView
                        key={block.hash}
                        block={block}
                        click={() => setSelectedBlock(block)}
                    />
                ))}
            </div>

            <br/><br/>

            <div className="container">
                <h1>Transactions inside block</h1>
                <TransactionsTable transactions={selectedBlock.transactions} />
            </div>
        </>
    );
}

export default BlockchainViewer;
