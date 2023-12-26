## Ethereum Selector Clashing Tool

Find a function declaration with a clashing selector!

### Purpose

-   You can use this tool to pentest against selector clashing attack

    https://forum.openzeppelin.com/t/beware-of-the-proxy-learn-how-to-exploit-function-clashing/1070

-   For original use cases

    Example by 1inch:

    https://github.com/1inch/limit-order-protocol/blob/393523db31e69f36cbd7f4b360098b8b38758151/contracts/helpers/ERC721Proxy.sol#L23

### Rust Usage

Install the project:

```bash
cd rust/eth_function_selector
```

Custom args and prefix:

```bash
cargo run -- --func_name transfer --params "(address,uint256)"
```

### Typescript Usage

Install the project:

```bash
nvm use
yarn
```

Basic search:

```bash
yarn start --targetFunc "transfer(address,uint256)"
```

Custom args and prefix:

```bash
yarn start --targetFunc "transfer(address,uint256)" --args "uint,bool" --prefix "myFunc_"
```

Short version:

```bash
yarn start -t "transfer(address,uint256)" -a "uint,bool" -p "myFunc_"
```

Only first N bytes (for a quick search):

```bash
yarn start -t "transfer(address,uint256)" --firstNBytes 1
```
