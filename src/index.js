const Blockchain = require('./blockchain');

const vfchain = Blockchain();

console.log('Mining block 1...');
vfchain.addBlock(1, '15/12/2020', { amount: 4 });
console.log('Block 1 nonce:', vfchain.getLatestBlock().nonce);

console.log('Mining block 2...');
vfchain.addBlock(2, '16/12/2020', { amount: 10 });
console.log('Block 2 nonce:', vfchain.getLatestBlock().nonce);
