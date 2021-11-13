const BN = require('bn.js');
const EC = require('elliptic').ec;
const keccak256 = require('js-sha3').keccak256;

function getPublicKeyFromPrivateKey(privateKey) {
    const ec = new EC('secp256k1');
    const G = ec.g;

    const qa = G.mul(privateKey);
    const x = qa.getX().toBuffer();
    const y = qa.getY().toBuffer();
    const pk = Buffer.concat([x,y]);

    return pk;
}

function getAddressFromPublicKey(publicKey) {
    const kh = keccak256(publicKey);

    const address = Buffer.from(kh, 'hex').slice(-20).toString('hex');

    return address;
}

module.export = {
    getPublicKeyFromPrivateKey,
    getAddressFromPublicKey
}

