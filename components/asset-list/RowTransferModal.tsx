
import { BasicModal, AssetWithdrawTokens } from '@interchain-ui/react';
import { useDisclosure } from '@/hooks/useDisclosure';
import { TransferInfo } from './AssetsOverview';
import { useState } from 'react';

interface IProps {
  transferInfo: TransferInfo;
  modalControl: ReturnType<typeof useDisclosure>;
}

export const RowTransferModal = (props: IProps) => {
  const { modalControl, transferInfo } = props;
  const {source,dest, type} = transferInfo
  const [inputValue, setInputValue] = useState('');


  return (
    <BasicModal
      isOpen={modalControl.isOpen}
      title={`${type} ${source?.symbol}`}
      onClose={ modalControl.close}
    >

<AssetWithdrawTokens
      isDropdown={false}
      fromSymbol={source?source.symbol:''}
      fromName={source?source.name:''}
      fromAddress={'88f723945a3a506552ec1a0a2f264a4846ea5027'}
      fromImgSrc={source?source.imgSrc:''}
      toName={dest?dest.name:''}
      toAddress={'641c9e8a44e3982ef5e3e97d4f1192eea2c46eb2'}
      toImgSrc={dest?dest.imgSrc:''}
      available={Number(source?.tokenAmount)}
      priceDisplayAmount={Number(source?.tokenAmountPrice)}
      timeEstimateLabel="20 seconds"
      amount={inputValue}
      onChange={(value) => {
        setInputValue(value);
      }}
      onCancel={() => {
        modalControl.close();
      }}
    />

    </BasicModal>
  );
};
