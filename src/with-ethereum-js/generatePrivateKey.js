const ethWallet = require("ethereumjs-wallet").default;

function generatePrivateKey() {
  let data = ethWallet.generate();
  return data.getPrivateKeyString();
}

module.exports = generatePrivateKey;
