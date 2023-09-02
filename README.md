# Lesson 7: Hardhat Fund Me

*[⌨️ (10:00:48) Lesson 7: Hardhat Fund Me](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=36048s)*


## Linting

- [Eslint](https://eslint.org/)
- [Solhint](https://github.com/protofire/solhint)
- [Linting Code](https://www.perforce.com/blog/qac/what-lint-code-and-why-linting-important)

## Importing from NPM

- [@chainlink/contracts](https://www.npmjs.com/package/@chainlink/contracts)
## Hardhat Deploy

- [Hardhat Deploy](https://github.com/wighawag/hardhat-deploy)
## Mocking
*[⌨️ (10:21:05) Mocking](https://youtu.be/gyMwXuJrbJQ?t=37265)*
- [Mocking](https://stackoverflow.com/questions/2665812/what-is-mocking)
- [Aave Github](https://github.com/aave/aave-v3-core)
- [Chainlink Github](https://github.com/smartcontractkit/chainlink)


## Testnet Demo - Hardhat Fund Me
*[⌨️ (10:55:45) Testnet Demo - Hardhat Fund Me](https://youtu.be/gyMwXuJrbJQ?t=39345)*
- Hardhat Deploy Block Confirmations

## Solidity Style Guide

- [Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- [NatSpec](https://docs.soliditylang.org/en/latest/natspec-format.html)
## Testing Fund Me

- [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)
- [Hardhat Deploy Fixtures](https://github.com/wighawag/hardhat-deploy#creating-fixtures)
- [ethers.getContract](https://github.com/wighawag/hardhat-deploy-ethers)
- [expect](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html)
- [ethers.utils.parseUnits](https://docs.ethers.io/v5/api/utils/display-logic/#utils-parseUnits)
- [Waffle Chai Matchers](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html)

## Gas III 

- [Transaction Response](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)
- [Transaction Receipt](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt)
## console.log & Debugging

- [Hardhat console.log](https://hardhat.org/hardhat-network/reference/#console-log)

## Storage in Solidity

- [Storage Layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
- [Purpose of the memory keyword](https://stackoverflow.com/questions/33839154/in-ethereum-solidity-what-is-the-purpose-of-the-memory-keyword)
- [getStorageAt](https://docs.ethers.io/v5/api/providers/provider/#Provider-getStorageAt)
## Gas Optimizations using Storage Knowledge
*[⌨️ (11:52:38) Gas Optimizations using Storage Knowledge](https://youtu.be/gyMwXuJrbJQ?t=42758)*
- [Opcodes](https://ethereum.org/en/developers/docs/evm/opcodes/)
- [Opcodes by Gas](https://github.com/crytic/evm-opcodes)
- [Opcodes by Gas](https://evm.codes/)
- Append `s_` to storage variables
- Append `i_` to immutable variables
- Caps lock and underscore constant variables
## Solidity Chainlink Style Guide

- [Chainlink Solidity Style Guide](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/issues/13)

## Staging Tests

- [Ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
## Running Scripts on a Local Node
*[⌨️ (12:17:58) Running Scripts on a Local Node](https://youtu.be/gyMwXuJrbJQ?t=44278)*
## Adding Scripts to your package.json
*[⌨️ (12:22:00) Adding Scripts to your package.json](https://youtu.be/gyMwXuJrbJQ?t=44520)*


# Lesson 8: HTML / Javascript Fund Me (Full Stack / Front End)
## Introduction
## How Websites work with Web3 Wallets
- [How to Connect your Smart Contracts to Metamask](https://www.youtube.com/watch?v=pdsYCkUWrgQ)
  - 💻 Code from Video: https://github.com/PatrickAlphaC/full-stack-web3-metamask-connectors
  - ✍️ Article from Video: https://betterprogramming.pub/everything-you-need-to-know-about-fullstack-web3-94c0f1b18019?sk=a2764bcbdae98bf05e1052931de77982

## Connecting HTML to Metamask
- [Metamask Docs](https://docs.metamask.io/guide/)
## Javascript in it's own file
## ES6 vs Nodejs
- [ES6 vs Nodesjs](https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export#31367852)
- [Ethers docs for web browser](https://docs.ethers.io/v5/getting-started/#getting-started--importing--web-browser)
- [module vs text/javascript](https://stackoverflow.com/questions/51418964/script-type-text-javascript-vs-script-type-module)
## Sending a transaction from a Website
- [Web3Provider](https://docs.ethers.io/v5/api/providers/other/#Web3Provider)
- [Adding a network to metamask](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
## Resetting an Account in Metamask
```
MetaMask - RPC Error:
[ethjs-query] while formatting ouputs from RPC '{"value":{"code":-32603,"data":{"code":-32000,"message":"Nonce too high. Expected nonce to be 2 but got 4. Note that transactions can't be queued when automining."}}}'
```
## Listening for Events and Completed Transactions
- [provider.once](https://docs.ethers.io/v5/api/providers/provider/#Provider-once)
- [Anonymous function](https://www.geeksforgeeks.org/javascript-anonymous-functions/)
- [Javascript Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
## Input Forms
## Reading from the Blockchain
## Withdraw Function
