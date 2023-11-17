import { useState } from 'react';

import Divider from '@components/Divider';
import MoneyIconSvg from '@assets/icons/money-icon.svg';
import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import { OrderDataInterface } from '@interfaces/OrderDataInterface';

import * as S from './styles';

const ItemOptionInput: React.FC<Pick<OrderDataInterface, 'options'>> = ({ options }) => {
  const [optionLabel, setOptionLabel] = useState('');

  const handleRadioChange = (event) => {
    setOptionLabel(event?.target.value);
  };

  return (
    <S.Container>
      {options &&
        options.map((option, index) => (
          <>
            <div className='option-wrapper'>
              <div className='option-info-wrapper'>
                <p className='option-name'>{option.name}</p>
                <p className='option-description'>{option.description}</p>
              </div>
              <div className='option-list'>
                {option.optionList &&
                  option.optionList.map((option, index) => (
                    <S.InputRadio>
                      <div>
                        <input
                          type='radio'
                          name='option_label'
                          value={option.label}
                          onChange={(event) => handleRadioChange(event)}
                        />{' '}
                        {optionLabel === option.label && <img className='option-icons' src={RadioCheckedIconSvg} />}
                        {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                        {optionLabel === option.label ? (
                          <>
                            <S.PromoLabel>{option.label}</S.PromoLabel>
                          </>
                        ) : (
                          <label>{option.label}</label>
                        )}
                      </div>
                      <div className='option-price-wrapper'>
                        {option.saleOriginalPrice > 0 ? (
                          <p>
                            de R$ {option.saleOriginalPrice} por <span> R$ {option.price}</span>
                          </p>
                        ) : (
                          option.price > 0 && <p className='option-price'>R$ {option.price}</p>
                        )}
                      </div>
                    </S.InputRadio>
                  ))}
              </div>
            </div>
            <Divider />
          </>
        ))}
    </S.Container>
  );
};

export default ItemOptionInput;
