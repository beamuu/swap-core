const Factory = artifacts.require("PancakeFactory.sol");
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');
// production tokens
const Katrade = artifacts.require('Katrade.sol');
const Lemon = artifacts.require('Lemon.sol');
const GoodGame = artifacts.require('GoodGame.sol');
const Tigra = artifacts.require('Tigra.sol');


module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
    const factory = await Factory.deployed();
    let token1Address, token2Address;
    if (network === 'mainnet') {
        token1Address = '';
        token2Address = '';
    } else {
        await deployer.deploy(Token1);
        await deployer.deploy(Token2);
        await deployer.deploy(Katrade);
        await deployer.deploy(Lemon);
        await deployer.deploy(GoodGame);
        await deployer.deploy(Tigra);
        const token1 = await Token1.deployed();
        const token2 = await Token2.deployed();
        const katrade = await Katrade.deployed();
        const lemon = await Lemon.deployed();
        const goodgame = await GoodGame.deployed();
        const tigra = await Tigra.deployed();
        token1Address = token1.address;
        token2Address = token2.address;
    }
    await factory.createPair(token1Address, token2Address);
};
