require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env" });
console.log('haovvse --',process.env.NEXT_PRIVATEKEY);
module.exports = {
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    opbnb: {
      url: "https://opbnb-testnet-rpc.bnbchain.org/",
      chainId: 5611, // Replace with the correct chainId for the "opbnb" network
      accounts: [process.env.NEXT_PRIVATEKEY], // Add private keys or mnemonics of accounts to use 
      // accounts: process.env.privateKey, // Add private keys or mnemonics of accounts to use 
      gasPrice: 20000000000,
    },
  },
};
