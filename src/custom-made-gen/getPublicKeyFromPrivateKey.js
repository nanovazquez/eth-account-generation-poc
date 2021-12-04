const EC = require("elliptic").ec;
const BN = require("bn.js");

function getPublicKeyFromPrivateKey(privateKey) {

  const privateKeyWithNoPrefix = privateKey.startsWith("0x") ? privateKey.slice(2) : privateKey;

  const sk = new BN(
    privateKeyWithNoPrefix, 16
  );

  const ec = new EC("secp256k1");
  const G = ec.g;

  const qa = G.mul(sk);
  const x = qa.getX().toBuffer();
  const y = qa.getY().toBuffer();
  const pk = Buffer.concat([x, y]);

  return pk;
}

module.exports = getPublicKeyFromPrivateKey;
