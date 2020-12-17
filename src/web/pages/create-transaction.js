import React, { useRef } from 'react';

import { useVFChain } from '../contexts/vfchain';

function CreateTransaction() {
    const vfchain = useVFChain();
    const [walletKey] = vfchain.walletKeys;

    const toInput = useRef(null);
    const amountInput = useRef(null);

    function createTransaction() {
        const toAddress = toInput.current.value;
        const amount = amountInput.current.value;
        vfchain.addTransaction(
            walletKey.publicKey,
            toAddress,
            amount,
            walletKey.keyObj,
        );

        toInput.current.value = null;
        amountInput.current.value = null;
    }

    return (
        <div className="container">
            <h1>Create transaction</h1>
            <p>Transfer some money to someone!</p>

            <br/>

            <div className="form-group">
                <label>From address</label>
                <input
                    type="text"
                    className="form-control"
                    value={walletKey.publicKey}
                    disabled
                />
            </div>

            <div className="form-group">
                <label>To address</label>
                <input
                    type="text"
                    className="form-control"
                    ref={toInput}
                />
            </div>

            <div className="form-group">
                <label>Amount</label>
                <input
                    type="number"
                    className="form-control"
                    ref={amountInput}
                />
            </div>

            <button
                className="btn btn-primary"
                onClick={createTransaction}
            >
                Sign &amp; create transaction
            </button>
        </div>
    );
}

export default CreateTransaction;
