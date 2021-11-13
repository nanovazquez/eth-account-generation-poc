const ethWallet = require('ethereumjs-wallet');

function generatePrivateKey() {
    let data = ethWallet.generate();

    return data.getPrivateKeyString();
}

module.exports = generatePrivateKey;
