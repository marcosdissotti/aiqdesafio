import { useMemo, useState } from 'react';
import { Field, useField } from 'formik';

import AddIconSvg from '@assets/icons/add-icon.svg';
import TrashIconSvg from '@assets/icons/trash-icon.svg';
import RemoveIconSvg from '@assets/icons/remove-icon.svg';
import RemoveDisabledIconSvg from '@assets/icons/remove-disabled-icon.svg';

import * as S from './styles';

interface NumberInputInterface {
  name: string;
  width?: string;
  height?: string;
}

const NumberInput: React.FC<NumberInputInterface> = ({ width, height, name }) => {
  const [field, , helpers] = useField(name);
  const isDisabled = useMemo(() => field.value <= 0 || field.value === undefined, [field.value]);

  const renderIconByQuantity = (icon: string) => {
    if (field.value <= 0 || field.value === undefined) return <img src={RemoveDisabledIconSvg} alt='' />;

    if (field.value == 1) return <img src={TrashIconSvg} alt='' />;

    return <img src={icon} alt='' />;
  };

  const handleIncrementClick = (event) => {
    event.preventDefault();

    const value = field.value || 0;

    helpers.setValue(value + 1);
  };

  const handleDecrementClick = (event) => {
    event.preventDefault();
    const value = field.value || 0;

    helpers.setValue(value - 1);
  };

  return (
    <S.Container width={width} height={height}>
      <S.Button onClick={(event) => handleDecrementClick(event)} disabled={isDisabled} width={width} height={height}>
        {renderIconByQuantity(RemoveIconSvg)}
      </S.Button>

      <input {...field} name={name} value={field.value || 0} disabled />
      <S.Button onClick={(event) => handleIncrementClick(event)} width={width} height={height}>
        <img src={AddIconSvg} alt='' />
      </S.Button>
    </S.Container>
  );
};

export default NumberInput;
