const Blockchain = require('./blockchain');

const vfchain = Blockchain();
vfchain.addBlock(1, '15/12/2020', { amount: 4 });
vfchain.addBlock(2, '16/12/2020', { amount: 10 });

console.log(JSON.stringify(vfchain, null, 4));
