const ethWallet = require("ethereumjs-wallet").default;

function getAddressFromPrivateKey(privateKey) {
  const privateKeyWithNoPrefix = privateKey.startsWith("0x") ? privateKey.slice(2) : privateKey;

  let data = ethWallet.fromPrivateKey(Buffer.from(privateKeyWithNoPrefix, "hex"));
  return data.getAddressString();
}

module.exports = getAddressFromPrivateKey;
