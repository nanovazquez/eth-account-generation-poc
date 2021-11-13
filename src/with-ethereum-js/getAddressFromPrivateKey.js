const ethWallet = require('ethereumjs-wallet').default;

function getAddressFromPrivateKey(privateKey) {
    let data = ethWallet.fromPrivateKey(Buffer.from(privateKey, 'hex'));

    return data.getAddressString();
}

// 0x85dAbaa40e0f455dA1a3E170A6911d88a7A90737
console.log(getAddressFromPrivateKey("d79937ea11a8776ec9493d4407240689bebc9c4cc1244c2318c7e1d8a771e3ff"));