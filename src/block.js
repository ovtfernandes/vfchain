const SHA256 = require('crypto-js/sha256');

const Block = (index, timestamp, data, previousHash='') => {
    const block = {
        index,
        timestamp,
        data,
        previousHash,
        calculateHash,
    };

    function calculateHash() {
        const {
            index,
            previousHash,
            timestamp,
            data
        } = block;
        return SHA256(index+previousHash+timestamp+JSON.stringify(data)).toString();
    }

    block.hash = calculateHash();

    return block;
};

module.exports = Block;
