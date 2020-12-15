const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const Blockchain = require('./blockchain');

const myKey = ec.keyFromPrivate('86538c8fae1dffd7f1143aaad8760ad16975c4125b50a41ca67817280ac0f7fd');
const myWalletAddress = myKey.getPublic('hex');

const vfchain = Blockchain();
vfchain.addTransaction(myWalletAddress, 'address2', 10, myKey);

console.log('\nStarting the miner...');
vfchain.minePendingTransactions(myWalletAddress);

console.log('\nBalance of myWalletAddress is', vfchain.getBalanceOfAddress(myWalletAddress));

// Only for testing, don't use it on production
// Private key: 86538c8fae1dffd7f1143aaad8760ad16975c4125b50a41ca67817280ac0f7fd
// Public key: 04afa8e50fe5bbb1be482afb9391ef8234b4436a01413578601aaff9296856c7c3acccd29dfe65449810a4b8526b5d7a770a26f0bad30d02e478b7a36706f20cdc
