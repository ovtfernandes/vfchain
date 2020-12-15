const Blockchain = require('./blockchain');

const vfchain = Blockchain();
vfchain.addBlock(1, '15/12/2020', { amount: 4 });
vfchain.addBlock(2, '16/12/2020', { amount: 10 });

console.log('Is blockchain valid?', vfchain.isChainValid());

vfchain.chain[1].data = { amount: 100 };
vfchain.chain[1].hash = vfchain.chain[1].calculateHash();
console.log('Is blockchain valid?', vfchain.isChainValid());
