import React from 'react';

import TransactionsTable from '../components/transactions-table';
import { useVFChain } from '../contexts/vfchain';

function PendingTransactions() {
    const vfchain = useVFChain();

    function minePendingTransactions() {
        const rewardAddress = vfchain.walletKeys[0].publicKey;
        vfchain.minePendingTransactions(rewardAddress);
    }

    return (
        <div className="container">
            <h1>Pending transactions</h1>
            <TransactionsTable transactions={vfchain.pendingTransactions} />

            <button
                className="btn btn-primary"
                onClick={minePendingTransactions}
            >
                Start mining
            </button>
        </div>
    );
}

export default PendingTransactions;
