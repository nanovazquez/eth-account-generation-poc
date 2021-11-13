const crypto = require("crypto");

function generatePrivateKey() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(32, (err, buf) => {
      if (err) {
        reject(err);
        return;
      }

      const privateKey = buf.toString("hex");
      resolve(privateKey);
    });
  });
}

module.exports = generatePrivateKey;
