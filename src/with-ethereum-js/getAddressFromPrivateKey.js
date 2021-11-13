const ethWallet = require("ethereumjs-wallet").default;

function getAddressFromPrivateKey(privateKey) {
  let data = ethWallet.fromPrivateKey(Buffer.from(privateKey, "hex"));
  return data.getAddressString();
}

module.exports = getAddressFromPrivateKey;
