import React, { useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { ChainName } from 'cosmos-kit';
import { Text, Button, AssetList, Stack, Divider, AssetListItemProps } from '@interchain-ui/react';


import { useDisclosure } from '@/hooks/useDisclosure';
import {assetsToShow as initAssetsToShow, assetsToAdd as initAssetsToAdd}  from '../../config/mock_assets'
import { AddAssetsModal } from './AddAssetsModal';
import { RowTransferModal } from './RowTransferModal';

export interface TransferInfo {
  type: 'Deposit'|'Withdraw';
  source?:AssetListItemProps;
  dest?:AssetListItemProps;
}

interface AssetsOverviewProps {
  isLoading?: boolean;
  selectedChainName: ChainName;
  refetch?: () => void;
}

export const AssetsOverview = (
  {selectedChainName}:AssetsOverviewProps) => {
  const [transferInfo, setTransferInfo] = useState<TransferInfo>();
  const [assetsAdded, setAssetsAdded] = useState<AssetListItemProps[]|undefined>();
  const rowModalControl = useDisclosure();
  const addModalControl = useDisclosure();

  
  const assetsToShow = useMemo(
    ()=>{
      const init = initAssetsToShow.find((asset) => asset.selectedChain===selectedChainName)?.assets||[]
      const assets = [...init, ...assetsAdded??[]]
      const dest = assets.find((a)=>a.name==selectedChainName)
      return assets.map((asset)=>({
        ...asset,
        showDeposit: !(asset.name==selectedChainName),
        showWithdraw:!(asset.name==selectedChainName),
        onDeposit: () => {
          flushSync(() => {
            setTransferInfo({
              type: 'Deposit',
              source:asset,
              dest:dest
            });
          });
          rowModalControl.open();
        },
        onWithdraw:()=>{}
      }))
    }
    ,[initAssetsToShow,assetsAdded]
  )

  const assetsToAdd = useMemo(
    ()=>{
     const init = initAssetsToAdd.find((asset) => asset.selectedChain===selectedChainName)?.assets||[]
     const names = assetsAdded?.map(a=>a.name)
     return init.filter((asset)=>!(names?.includes(asset.name)))
    }
    ,[initAssetsToAdd,assetsAdded]
  )
  const onAssetAdded = (asset?: AssetListItemProps) => {
    setAssetsAdded([...(assetsAdded??[]), ...(asset?[asset]:[])])
    addModalControl.close();
  };

  return (
    <>
    <Stack
    space="$15"
      attributes={{
        minWidth: "720px",
        alignItems: "center",
      }}
     
    >
        <Text
          color="$textSecondary"
          fontSize="$lg"
          fontWeight="$semibold"
          attributes={{ marginTop: "$10", marginBottom: "$9" }}
        >
          {`On ${selectedChainName}`}
        </Text>

        <Button
        size="md"
        intent="secondary"
        // onClick={(event) => props?.onDeposit?.(event)}
        onClick= {addModalControl.open}
      >
        Add Asset
      </Button>
      </Stack>

      <Divider mb="$12" mt='$6' />

      <AssetList
        needChainSpace={false}
        list={assetsToShow}
        titles={[
          'Asset',
          'Balance'
        ]}
      />

      <AddAssetsModal 
      modalControl={addModalControl} 
      assets={assetsToAdd} 
      onAssetAdded={onAssetAdded} />

      {transferInfo && 
      <RowTransferModal 
      transferInfo={transferInfo} 
      modalControl={rowModalControl}
      />
      }
    </>
  );
};


