const Block = require('./block');
const Transaction = require('./transaction');

const Blockchain = () => {
    const chain = [createGenesisBlock()];
    const pendingTransactions = [];
    const blockchain = {
        chain,
        difficulty: 2,
        miningReward: 100,
        pendingTransactions,
        getLatestBlock,
        minePendingTransactions,
        addTransaction,
        getBalanceOfAddress,
        isChainValid,
    };

    function createGenesisBlock() {
        return Block(Date.now(), [], '0');
    }

    function getLatestBlock() {
        return chain[chain.length-1];
    }

    function minePendingTransactions(miningRewardAddress) {
        const rewardTx = Transaction(null, miningRewardAddress, blockchain.miningReward);
        pendingTransactions.push(rewardTx);

        const previousHash = getLatestBlock().hash;
        const newBlock = Block(Date.now(), [...pendingTransactions], previousHash);
        newBlock.mineBlock(blockchain.difficulty);

        console.log('Block successfully mined!');
        chain.push(newBlock);
        
        pendingTransactions.splice(0);
    }

    function addTransaction(fromAddress, toAddress, amount, signingKey) {
        if (!fromAddress || !toAddress) {
            throw new Error('Transaction must include from and to addresses');
        }

        const newTransaction = Transaction(fromAddress, toAddress, amount);
        newTransaction.signTransaction(signingKey);

        if (!newTransaction.isValid()) {
            throw new Error('Cannot add invalid transaction to chain');
        }

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
                || currentBlock.previousHash !== previousBlock.hash
                || !currentBlock.hasValidTransactions()) {
                return false;
            }
        }

        return true;
    }

    return blockchain;
};

module.exports = Blockchain;
