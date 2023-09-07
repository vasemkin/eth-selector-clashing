## Ethereum Selector Clashing Tool

Find a function declaration with a clashing selector!

### Purpose

-   You can use this tool to pentest against selector clashing attack

    https://forum.openzeppelin.com/t/beware-of-the-proxy-learn-how-to-exploit-function-clashing/1070

-   For original use cases

    Example by 1inch:

    https://github.com/1inch/limit-order-protocol/blob/393523db31e69f36cbd7f4b360098b8b38758151/contracts/helpers/ERC721Proxy.sol#L23

### Usage

Install the project:

```bash
git clone https://github.com/vasemkin/eth-selector-clashing
cd eth-selector-clashing
nvm use
yarn
```

Init the search:

```bash
yarn start --targetFunc "transfer(address,uint256)"
```
