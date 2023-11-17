import { useMemo, useState } from 'react';

import AddIconSvg from '@assets/icons/add-icon.svg';
import RemoveIconSvg from '@assets/icons/remove-icon.svg';
import RemoveDisabledIconSvg from '@assets/icons/remove-disabled-icon.svg';
import TrashIconSvg from '@assets/icons/trash-icon.svg';

import * as S from './styles';

interface NumberInputInterface {
  width?: string;
  height?: string;
}

const NumberInput: React.FC<NumberInputInterface> = ({ width, height }) => {
  const [quantity, setQuantity] = useState(0);
  const isDisabled = useMemo(() => quantity <= 0, [quantity]);

  const renderIconByQuantity = (icon: string) => {
    if (quantity <= 0) return <img src={RemoveDisabledIconSvg} alt='' />;

    if (quantity == 1) return <img src={TrashIconSvg} alt='' />;

    return <img src={icon} alt='' />;
  };

  const handleIncrementClick = (event) => {
    event.preventDefault();

    setQuantity(quantity + 1);

    console.log('isDisabled', isDisabled);
  };

  const handleDecrementClick = (event) => {
    event.preventDefault();
    setQuantity(quantity - 1);
  };

  return (
    <S.Container width={width} height={height}>
      <S.Button onClick={(event) => handleDecrementClick(event)} disabled={isDisabled}>
        {renderIconByQuantity(RemoveIconSvg)}
      </S.Button>
      <input type='number' value={quantity} />
      <S.Button onClick={(event) => handleIncrementClick(event)}>
        <img src={AddIconSvg} alt='' />
      </S.Button>
    </S.Container>
  );
};

export default NumberInput;
