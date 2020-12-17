import React from 'react';

function BlockHash({ hash }) {
    return (
        <div
            className="text-truncate"
            style={{ color: `#${hash.substring(0, 6)}` }}
        >
            <small>{hash}</small>
        </div>
    );
}

export default BlockHash;
