const Blockchain = require('./blockchain');

const vfchain = Blockchain();
vfchain.createTransaction('address1', 'address2', 100);
vfchain.createTransaction('address2', 'address1', 50);

console.log('\nStarting the miner...');
vfchain.minePendingTransactions('address3');

console.log('\nBalance of address3 is', vfchain.getBalanceOfAddress('address3'));

console.log('\nStarting the miner again...');
vfchain.minePendingTransactions('address3');

console.log('\nBalance of address3 is', vfchain.getBalanceOfAddress('address3'));
