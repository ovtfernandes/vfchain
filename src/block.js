const SHA256 = require('crypto-js/sha256');

const Block = (index, timestamp, data, previousHash='') => {
    const block = {
        index,
        timestamp,
        data,
        previousHash,
        nonce: 0,
        calculateHash,
        mineBlock,
    };

    function calculateHash() {
        const {
            index,
            previousHash,
            timestamp,
            data,
            nonce,
        } = block;
        return SHA256(index+previousHash+timestamp+JSON.stringify(data)+nonce).toString();
    }

    function mineBlock(difficulty) {
        while (block.hash.substring(0, difficulty) !== Array(difficulty+1).join('0')) {
            block.nonce++;
            block.hash = calculateHash();
        }

        console.log('Block mined:', block.hash);
    }

    block.hash = calculateHash();

    return block;
};

module.exports = Block;
