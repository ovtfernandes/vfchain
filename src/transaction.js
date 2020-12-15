const Transaction = (fromAddress, toAddress, amount) => {
    const transaction = {
        fromAddress,
        toAddress,
        amount,
    };

    return transaction;
};

module.exports = Transaction;
