import React from 'react';

import BlockHash from '../block-hash';

import './styles.css';

function BlockView({ block }) {
    return (
        <div className="card block-card">
            <div className="card-body">
                <h5 className="card-title">
                    Block
                    {block.previousHash === '0' && <small className="text-muted">&nbsp;(Genesis block)</small>}
                </h5>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span>Hash</span>
                    <br/>
                    <BlockHash hash={block.hash} />

                    <br/>
                    <span>Hash of previous block</span>
                    <BlockHash hash={block.previousHash} />
                </li>
                <li className="list-group-item">
                    <span>Nonce</span>
                    <br/>
                    <div className="text-truncate text-muted">
                        {block.nonce}
                    </div>
                </li>
                <li className="list-group-item">
                    <span>Timestamp</span>
                    <br/>
                    <div className="text-truncate text-muted">
                        {block.timestamp}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default BlockView;
