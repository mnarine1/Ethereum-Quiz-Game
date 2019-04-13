var Migrations = artifacts.require("./Quiz.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
