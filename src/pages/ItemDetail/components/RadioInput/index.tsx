import React from 'react';
import { Field } from 'formik';

import MoneyIconSvg from '@assets/icons/money-icon.svg';
import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import OptionPriceOrSale from '@pages/ItemDetail/components/OptionPriceOrSale';
import { FormState, OptionInterface, OptionsInterface } from '@interfaces/OrderDataInterface';

import * as S from './styles';

interface RadioInput {
  optionGroup: OptionsInterface;
  option: OptionInterface;
  values: FormState;
}

const RadioInput: React.FC<RadioInput> = ({ option, optionGroup, values }) => {
  return (
    <S.Container>
      <div>
        <Field type='radio' name={optionGroup.name} value={option.label} />

        {values[optionGroup.name] === option.label && <img className='option-icons' src={RadioCheckedIconSvg} />}
        {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}

        {values[optionGroup.name] === option.label ? (
          <>
            <S.HighlightLabel>{option.label}</S.HighlightLabel>
          </>
        ) : (
          <label>{option.label}</label>
        )}
      </div>
      <div className='option-price-wrapper'>
        {option && (
          <OptionPriceOrSale
            price={option.price}
            saleOriginalPrice={option.saleOriginalPrice}
            optionIsRequired={optionGroup.optionIsRequired}
          />
        )}
      </div>
    </S.Container>
  );
};

export default RadioInput;
