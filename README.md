# eth-account-generation-poc

This repo is a POC to validate a generation of an ethereum account using private/public key encyption.

It consists of two demos:

1. Private/Public key + blockchain address generation
1. Transaction initialization using web3

# Private/Public key + blockchain address generation

To run this demo, simply execute in a terminal `node src/demo-1.js`. The generated information will be shown in the terminal.

# Transaction initialization using web3

> **Prerequisites:** > _ Metamask wallet extension installed of your browser.
> _ Accounts set up in the metamask wallet.

To run this demo, you need to first set up a local web server to host the html page. For this, simply execute in a terminal `npx serve src`, open the local site created @ localhost and navigate to the **demo-2.html** page.

Then, simply copy & paste the address of the wallet to transfer money to (destination) and the amount of WEI to transfer.
