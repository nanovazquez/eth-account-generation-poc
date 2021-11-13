const BN = require("bn.js");
const EC = require("elliptic").ec;
const keccak256 = require("js-sha3").keccak256;

function getAddressFromPublicKey(publicKey) {
  const kh = keccak256(publicKey);
  const address = Buffer.from(kh, "hex").slice(-20).toString("hex");

  return address;
}

module.exports = getAddressFromPublicKey;
