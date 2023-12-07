//https://eth-goerli.g.alchemy.com/v2/JqSIei0_M2nU7P5Uc4oJpSniJ_YkTlaQ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JqSIei0_M2nU7P5Uc4oJpSniJ_YkTlaQ',
      accounts: ['7e9eda76b537f3d173f1815acb7ba65f8aa1a923487ab14701e2923c4c18bbca'],
    },
  },
};