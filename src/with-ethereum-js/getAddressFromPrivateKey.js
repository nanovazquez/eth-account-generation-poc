const ethWallet = require("ethereumjs-wallet").default;

function getAddressFromPrivateKey(privateKey) {
  const privateKeyWithNoPrefix = privateKey.startsWith("0x") ? privateKey.slice(2) : privateKey;
  const privateKeyBuffer = Buffer.from(privateKeyWithNoPrefix, "hex");

  const data = ethWallet.fromPrivateKey(privateKeyBuffer);
  return data.getAddressString();
}

module.exports = getAddressFromPrivateKey;
