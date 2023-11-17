import { useState } from 'react';

import Divider from '@components/Divider';
import MoneyIconSvg from '@assets/icons/money-icon.svg';
import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import { OrderDataInterface } from '@interfaces/OrderDataInterface';

import * as S from './styles';
import NumberInput from '@components/NumberInput';

const ItemOptionInput: React.FC<Pick<OrderDataInterface, 'options'>> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleRadioChange = (event, optionGroup: string) => {
    const { value } = event.target;
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [optionGroup]: value
    }));

    console.log('selectedOptions', selectedOptions);
  };

  return (
    <S.Container>
      {options &&
        options.map((optionGroup, index) => (
          <>
            <div className='option-wrapper'>
              <div className='option-info-wrapper'>
                <p className='option-name'>{optionGroup.name}</p>
                <p className='option-description'>{optionGroup.description}</p>
              </div>
              <div className='option-list'>
                {optionGroup.optionList &&
                  optionGroup.hasQuantity &&
                  optionGroup.maxOption <= 1 &&
                  optionGroup.optionList.map((option, index) => (
                    <S.InputContainer>
                      <div>
                        <NumberInput />
                        {selectedOptions[optionGroup.name] === option.label && (
                          <img className='option-icons' src={RadioCheckedIconSvg} />
                        )}
                        {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                        {selectedOptions[optionGroup.name] === option.label ? (
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
                    </S.InputContainer>
                  ))}
                {optionGroup.optionList &&
                  !optionGroup.hasQuantity &&
                  optionGroup.maxOption <= 1 &&
                  optionGroup.optionList.map((option, index) => (
                    <S.InputContainer>
                      <div>
                        <input
                          type='radio'
                          name={optionGroup.name}
                          value={option.label}
                          onChange={(event) => handleRadioChange(event, optionGroup.name)}
                        />
                        {selectedOptions[optionGroup.name] === option.label && (
                          <img className='option-icons' src={RadioCheckedIconSvg} />
                        )}
                        {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                        {selectedOptions[optionGroup.name] === option.label ? (
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
                    </S.InputContainer>
                  ))}

                {optionGroup.optionList &&
                  optionGroup.maxOption > 1 &&
                  optionGroup.optionList.map((option, index) => (
                    <S.InputContainer>
                      <div>
                        <S.CheckboxInput type='checkbox' name={optionGroup.name} value={option.label} />

                        {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                        {selectedOptions[optionGroup.name] === option.label ? (
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
                    </S.InputContainer>
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
