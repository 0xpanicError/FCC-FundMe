const networkConfig = {
  31337: {
    name: "localhost",
  },

  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  },

  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
