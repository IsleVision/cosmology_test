import { useState } from "react";
import { useDisclosure } from '@/hooks/useDisclosure';

import {
  AssetListItemProps,
  Avatar,
  BasicModal,
  Box,
  Button,
  Combobox,
  Stack,
  Text,
} from "@interchain-ui/react";

export type AssetSelectProps = {
  modalControl: ReturnType<typeof useDisclosure>;
  assets: AssetListItemProps[];
  chainName?: string;
  onAssetAdded: (asset?: AssetListItemProps) => void;
};

export function AddAssetsModal({
  modalControl,
  assets = [],
  onAssetAdded = () => { },
}: AssetSelectProps) {

  const [asset, setAsset] = useState<AssetListItemProps | undefined>();

  const handleConfirm = () => {
    onAssetAdded(asset)
    setAsset(undefined)
    modalControl.close();
  };


  return (

    <BasicModal
      isOpen={modalControl.isOpen}
      title="Add Asset"
      onClose={modalControl.close}
    >
      {!!assets.length ? <Box
        gap="$14"
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Combobox
          selectedKey={asset?.name}
          inputValue={asset?.name}
          openOnFocus
          onSelectionChange={(assetName) => {
            const newAsset = assets.find((asset) => asset.name === assetName)
            setAsset(newAsset);
          }}
          inputAddonStart={

            <Avatar
              name={asset ? asset.name : ""}
              size="xs"
              src={asset?.imgSrc}
              fallbackMode="bg"
              attributes={{
                paddingX: "$4",
              }}
            />

          }
          styleProps={{
            width: '350px'
          }}

        >
          {assets.map((option) => (
            <Combobox.Item key={option.name} textValue={option.name}>
              <Stack
                direction="horizontal"
                space="$4"
                attributes={{ alignItems: "center" }}
              >
                <Avatar
                  name={option.name}
                  size="xs"
                  src={option.imgSrc}
                  fallbackMode="bg"
                />
                <Text fontSize="$md" fontWeight="$normal" color="$text">
                  {option.name}
                </Text>
              </Stack>
            </Combobox.Item>
          ))}
        </Combobox>

        <Button
          size="md"
          intent="secondary"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Box>
        :
        <Text fontSize="$lg" fontWeight="normal" color="$text">
          No assets to add!
        </Text>

      }

    </BasicModal>

  );
}
