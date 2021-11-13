const generatePrivateKey = require("./custom-made-gen/generatePrivateKey");
const getPublicKeyFromPrivateKey = require("./custom-made-gen/getPublicKeyFromPrivateKey");
const getAddressFromPublicKey = require("./custom-made-gen/getAddressFromPublicKey");

(async function main() {
  try {
    const privateKey = await generatePrivateKey();
    console.log("The private key is:", privateKey);

    const publicKey = getPublicKeyFromPrivateKey(privateKey);
    console.log("The public key is:", publicKey);

    const address = getAddressFromPublicKey(publicKey);
    console.log("The address is:", address); // 0x85dAbaa40e0f455dA1a3E170A6911d88a7A90737
  } catch (err) {
    console.error(err);
  }
})();
