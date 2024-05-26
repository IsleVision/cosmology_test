import { AssetListItemProps } from "@interchain-ui/react";
import { ChainName } from "cosmos-kit";



export const selectedChain:ChainName='Osmosis'

export interface AssetList{
  selectedChain:string, 
  assets:AssetListItemProps[]
}
  
export const assetsToShow: AssetList[] = [
  {
    selectedChain:'Osmosis',
    assets:[{
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
      name: 'TerraClassicUSD',
      symbol: 'USTC',
      tokenAmount: '89.66',
      tokenAmountPrice: '10'
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
      name: 'Teritori',
      symbol: 'TORI',
      tokenAmount: '102.61',
      tokenAmountPrice: '101.02'
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
      name: 'Osmosis',
      symbol: 'OSMO',
      tokenAmount: '12.12',
      tokenAmountPrice: '15'
    }]
  },
  {
    selectedChain:'Panacea',
    assets:  [{
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      name: 'MediBloc',
      symbol: 'MED',
      tokenAmount: '19.13',
      tokenAmountPrice: '18.23'
    }]
  }
]

  
export const assetsToAdd: AssetList[] = [
  {
    selectedChain:'Osmosis',
    assets:[
    {
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      name: 'Cosmos Hub',
      symbol: 'ATOM',
      tokenAmount: '39.61',
      tokenAmountPrice: '25.37'
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
      name: 'Ether',
      symbol: '"ETH"',
      tokenAmount: '69.21',
      tokenAmountPrice: '35.73'
    },
    {
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
      name: 'Avalanche',
      symbol: '"AVAX"',
      tokenAmount: '73.19',
      tokenAmountPrice: '48.43'
    }
  ]
  },
  {
    selectedChain:'Panacea',
    assets:  [{
      imgSrc: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      name: 'MediBloc',
      symbol: 'MED',
      tokenAmount: '19.13',
      tokenAmountPrice: '18.23'
    }]
  }
]
