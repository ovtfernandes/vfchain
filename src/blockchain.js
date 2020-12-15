const Block = require('./block');
const Transaction = require('./transaction');

const Blockchain = () => {
    const chain = [createGenesisBlock()];
    const difficulty = 2;
    const pendingTransactions = [];
    const miningReward = 100;

    function createGenesisBlock() {
        return Block('14/12/2020', 'Genesis block', '0');
    }

    function getLatestBlock() {
        return chain[chain.length-1];
    }

    function minePendingTransactions(miningRewardAddress) {
        const previousHash = getLatestBlock().hash;
        const newBlock = Block(Date.now(), [...pendingTransactions], previousHash);
        newBlock.mineBlock(difficulty);

        console.log('Block successfully mined!');
        chain.push(newBlock);

        const transaction = Transaction(null, miningRewardAddress, miningReward);
        pendingTransactions.splice(0);
        pendingTransactions.push(transaction);
    }

    function createTransaction(fromAddress, toAddress, amount) {
        const newTransaction = Transaction(fromAddress, toAddress, amount);
        pendingTransactions.push(newTransaction);
    }

    function getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                else if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    function isChainValid() {
        for (let i=1; i<chain.length; i++) {
            const currentBlock = chain[i];
            const previousBlock = chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash()
                || currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }

    return {
        chain,
        getLatestBlock,
        minePendingTransactions,
        createTransaction,
        getBalanceOfAddress,
        isChainValid,
    };
};

module.exports = Blockchain;
