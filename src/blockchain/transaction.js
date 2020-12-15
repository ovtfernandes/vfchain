const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const Transaction = (fromAddress, toAddress, amount) => {
    const transaction = {
        fromAddress,
        toAddress,
        amount,
        signTransaction,
        isValid,
    };

    function calculateHash() {
        const {
            fromAddress,
            toAddress,
            amount,
        } = transaction;

        return SHA256(fromAddress+toAddress+amount).toString();
    }

    function signTransaction(signingKey) {
        if (signingKey.getPublic('hex') !== transaction.fromAddress) {
            throw new Error('You cannot sign transactions for other wallets!');
        }

        const hash = calculateHash();
        const signature = signingKey.sign(hash, 'base64');
        transaction.signature = signature.toDER('hex');
    }

    function isValid() {
        const {
            fromAddress,
            signature,
        } = transaction;

        if (fromAddress === null) return true;

        if (!signature || signature.length === 0) {
            throw new Error('No signature in this transaction');
        }

        const publicKey = ec.keyFromPublic(fromAddress, 'hex');
        return publicKey.verify(calculateHash(), signature);
    }

    return transaction;
};

module.exports = Transaction;
