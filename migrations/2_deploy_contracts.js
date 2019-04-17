var HelloEth = artifacts.require("./HelloEthSalon.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloEth);
};
