const SHA256 = require('crypto-js/sha256');

const Block = (timestamp, transactions, previousHash='') => {
    const block = {
        timestamp,
        transactions,
        previousHash,
        nonce: 0,
        calculateHash,
        mineBlock,
        hasValidTransactions,
    };

    function calculateHash() {
        const {
            previousHash,
            timestamp,
            transactions,
            nonce,
        } = block;
        return SHA256(previousHash+timestamp+JSON.stringify(transactions)+nonce).toString();
    }

    function mineBlock(difficulty) {
        while (block.hash.substring(0, difficulty) !== Array(difficulty+1).join('0')) {
            block.nonce++;
            block.hash = calculateHash();
        }

        console.log('Block mined:', block.hash);
    }

    function hasValidTransactions() {
        for (const tx of block.transactions) {
            if (!tx.isValid()) {
                return false;
            }
        }

        return true;
    }

    block.hash = calculateHash();

    return block;
};

module.exports = Block;
