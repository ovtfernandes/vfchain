const Block = require('./block');

const Blockchain = () => {
    const chain = [createGenesisBlock()];

    function createGenesisBlock() {
        return Block(0, '14/12/2020', 'Genesis block', '0');
    }

    function getLatestBlock() {
        return chain[chain.length-1];
    }

    function addBlock(index, timestamp, data) {
        const previousHash = getLatestBlock().hash;
        const newBlock = Block(index, timestamp, data, previousHash);
        chain.push(newBlock);
    }

    return {
        chain,
        getLatestBlock,
        addBlock,
    };
};

module.exports = Blockchain;
