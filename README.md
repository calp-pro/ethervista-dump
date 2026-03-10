# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;ethervista-dump

<br>

Static set of addresses (Ethervista Ethereum mainnet).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data: `dump.csv` 140Kb+ 

CSV schema: `id,pair,token0,token1`

## Example:
```
...
5,0xddf0c37136d4d883f2c7a7571f848b1e3b926685,0x4c9edd5852cd905f086c759e8383e09bff1e68b3,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
...
```
where:
- `5`
  * pair/pool index at factory contract
- `0xddf0c37136d4d883f2c7a7571f848b1e3b926685`
  * USDE/WETH AMM [contract](https://etherscan.io/address/0xddf0c37136d4d883f2c7a7571f848b1e3b926685) address
- `0x4c9edd5852cd905f086c759e8383e09bff1e68b3`
  * USDE ERC-20 token [contract](https://etherscan.io/token/0x4c9edd5852cd905f086c759e8383e09bff1e68b3) address
- `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`
  * WETH ERC-20 token [contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump.csv`.

## Usage CLI/API:
```bash
> node -e "require('ethervista-dump').load().then(pairs => console.log(pairs.length))"
> 1074
```
