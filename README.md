# swap-core
Clonned from [pancake-swap-core](https://github.com/pancakeswap/pancake-swap-core)
### Clonning this project
```shell
$ git clone https://github.com/nutchanonc/swap-core.git
```
### Deploy contracts
- Make sure you have installed `truffle`
```shell
$ npm install -g truffle
```
- Create `truffle-config.js`
```shell
$ truffle init
```
- Set your network provider in `truffle-config.js`
- Create your own migrations
```shell
$ touch migrations/2_deploy_contracts.js
```
- Deploy contracts
```shell
$ truffle migrate --reset
```
