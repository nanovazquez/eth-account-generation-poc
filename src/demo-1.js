const generatePrivateKey = require("./custom-made-gen/generatePrivateKey");
const getPublicKeyFromPrivateKey = require("./custom-made-gen/getPublicKeyFromPrivateKey");
const getAddressFromPublicKey = require("./custom-made-gen/getAddressFromPublicKey");

const generatePrivateKey_ethereumjs = require("./with-ethereum-js/generatePrivateKey");
const getAddressFromPrivateKey_ethereumjs = require("./with-ethereum-js/getAddressFromPrivateKey");

(async function main() {
  try {
    console.log();
    console.log("Using custom made generation");
    console.log("----------------------------");

    const privateKey = await generatePrivateKey();
    console.log("The private key is: ", privateKey);

    const publicKey = getPublicKeyFromPrivateKey(privateKey);
    console.log("The public key is:", publicKey);

    const address = getAddressFromPublicKey(publicKey);
    console.log("The address is:", address);

    console.log();
    console.log("Using ethereum.js");
    console.log("-----------------");

    const privateKeyEthJS = generatePrivateKey_ethereumjs();
    console.log("The private key is:", privateKeyEthJS);

    const addressEthJS = getAddressFromPrivateKey_ethereumjs(privateKeyEthJS);
    console.log("The address is:", addressEthJS);
  } catch (err) {
    console.error(err);
  }
})();
