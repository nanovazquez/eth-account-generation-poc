const EC = require("elliptic").ec;

function getPublicKeyFromPrivateKey(privateKey) {
  const ec = new EC("secp256k1");
  const G = ec.g;

  const qa = G.mul(privateKey);
  const x = qa.getX().toBuffer();
  const y = qa.getY().toBuffer();
  const pk = Buffer.concat([x, y]);

  return pk;
}

module.exports = getPublicKeyFromPrivateKey;
