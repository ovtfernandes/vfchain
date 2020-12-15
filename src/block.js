const SHA256 = require('crypto-js/sha256');

const Block = (index, timestamp, data, previousHash='') => {
    const block = {
        index,
        timestamp,
        data,
        previousHash,
        hash: calculateHash(),
    };

    function calculateHash() {
        return SHA256(index+previousHash+timestamp+JSON.stringify(data)).toString();
    }

    return block;
};

module.exports = Block;
