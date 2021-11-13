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

// 0x85dAbaa40e0f455dA1a3E170A6911d88a7A90737
console.log(getAddressFromPublicKey(getPublicKeyFromPrivateKey("d79937ea11a8776ec9493d4407240689bebc9c4cc1244c2318c7e1d8a771e3ff")));