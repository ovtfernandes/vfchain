import EC from 'elliptic';

import Blockchain from '../../blockchain';

function VFChain() {
    const blockchainInstance = Blockchain();
    blockchainInstance.difficulty = 1;
    blockchainInstance.minePendingTransactions('my-wallet-address');

    const walletKeys = [];

    generateWalletKeys();

    function generateWalletKeys() {
        const ec = new EC.ec('secp256k1');
        const keyObj = ec.genKeyPair();
        const publicKey = keyObj.getPublic('hex');
        const privateKey = keyObj.getPrivate('hex');

        walletKeys.push({
            keyObj,
            publicKey,
            privateKey,
        });
    }

    function getBlocks() {
        return blockchainInstance.chain;
    }

    return {
        getBlocks,
    };
}

export default VFChain;
