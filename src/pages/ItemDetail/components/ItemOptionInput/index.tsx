import { useState } from 'react';

import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import MoneyIconSvg from '@assets/icons/money-icon.svg';

import * as S from './styles';

const ItemOptionInput: React.FC = () => {
  const [optionLabel, setOptionLabel] = useState('');

  const handleRadioChange = (event) => {
    setOptionLabel(event?.target.value);
  };

  const option_list = [
    {
      option_label: 'médio',
      option_price: 19.9,
      option_promo_original_price: 22.9,
      option_quantity: 0
    },
    {
      option_label: 'grande',
      option_price: 28.9,
      option_promo_original_price: 0,
      option_quantity: 0
    },
    {
      option_label: 'pequena',
      option_price: 28.9,
      option_promo_original_price: 0,
      option_quantity: 0
    },
    {
      option_label: 'gigante',
      option_price: 28.9,
      option_promo_original_price: 0,
      option_quantity: 0
    }
  ];

  return (
    <S.Container className='item-detail-padding'>
      <div className='option-info-wrapper'>
        <p className='option-name'>qual o tamanho?</p>
        <p className='option-description'>escolha 1</p>
      </div>
      <div className='option-list'>
        <div className='input-radio-wrapper'>
          <div>
            <input
              type='radio'
              name='option_label'
              value={option_list[0].option_label}
              onChange={(event) => handleRadioChange(event)}
            />{' '}
            {optionLabel === option_list[0].option_label && <img className='option-icons' src={RadioCheckedIconSvg} />}
            {option_list[0].option_promo_original_price > 0 ? (
              <>
                <img className='option-icons' src={MoneyIconSvg} />
                <S.PromoLabel>{option_list[0].option_label}</S.PromoLabel>
              </>
            ) : (
              <label>{option_list[0].option_label}</label>
            )}
          </div>
          <div className='option-price-wrapper'>
            {option_list[0].option_promo_original_price > 0 ? (
              <p>
                de R$ {option_list[0].option_promo_original_price} por <span> R$ {option_list[1].option_price}</span>
              </p>
            ) : (
              <>R$ {option_list[0].option_price}</>
            )}
          </div>
        </div>
        <div className='input-radio-wrapper'>
          <div>
            <input
              type='radio'
              name='option_label'
              value={option_list[1].option_label}
              onChange={(event) => handleRadioChange(event)}
            />{' '}
            {optionLabel === option_list[1].option_label && <img className='option-icons' src={RadioCheckedIconSvg} />}
            {option_list[1].option_promo_original_price > 0 && <img className='option-icons' src={MoneyIconSvg} />}
            <label>{option_list[1].option_label}</label>
          </div>
          <div className='option-price-wrapper'>
            {option_list[1].option_promo_original_price > 0 ? (
              <p>
                de R$ {option_list[1].option_promo_original_price} por <span> R$ {option_list[1].option_price}</span>
              </p>
            ) : (
              <>R$ {option_list[1].option_price}</>
            )}
          </div>
        </div>
        {/* <div className='input-radio-wrapper'>
          <div>
            <input
              type='radio'
              name='option_label'
              value={option_list[2].option_label}
              onChange={(event) => handleRadioChange(event)}
            />
            {optionLabel === option_list[2].option_label && <img className='option-icons' src={RadioCheckedIconSvg} />}
            {option_list[2].option_promo_original_price > 0 && <img className='option-icons' src={MoneyIconSvg} />}
            <label>{option_list[2].option_label}</label>
          </div>
          <div className='option-price-wrapper'>
            {option_list[2].option_promo_original_price > 0 ? (
              <p>
                de R$ {option_list[2].option_promo_original_price} por <span> R$ {option_list[2].option_price}</span>
              </p>
            ) : (
              <>R$ {option_list[2].option_price}</>
            )}
          </div>
        </div> */}
      </div>
    </S.Container>
  );
};

export default ItemOptionInput;
