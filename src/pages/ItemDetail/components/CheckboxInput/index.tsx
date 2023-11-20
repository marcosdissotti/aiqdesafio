import { Field } from 'formik';

import MoneyIconSvg from '@assets/icons/money-icon.svg';
import OptionPriceOrSale from '@pages/ItemDetail/components/OptionPriceOrSale';
import { FormState, OptionInterface, OptionsInterface } from '@interfaces/OrderDataInterface';

import * as S from './styles';

interface CheckboxInput {
  optionGroup: OptionsInterface;
  option: OptionInterface;
  values: FormState;
}

const CheckboxInput: React.FC<CheckboxInput> = ({ option, optionGroup, values }) => {
  return (
    <S.Container>
      <div>
        <Field type='checkbox' name={optionGroup.name} value={option.label} as={S.CheckboxInput} />

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
        {
          <OptionPriceOrSale
            price={option.price}
            saleOriginalPrice={option.saleOriginalPrice}
            optionIsRequired={optionGroup.optionIsRequired}
          />
        }
      </div>
    </S.Container>
  );
};

export default CheckboxInput;
