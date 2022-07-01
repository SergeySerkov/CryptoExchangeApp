require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6ABV_08a9wX7o5XVfZXJlKr0Al-2Y8-5',
      accounts: ['4ae4c2be468c5e940575eaffef1a1f262015dde0777fe66937b28a668fbf72bc'],
    },
  },
};