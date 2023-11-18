import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, useFormikContext } from 'formik';

import Divider from '@components/Divider';

import NumberInput from '@components/NumberInput';
import { OrderContext } from '@contexts/OrderContext';

import MoneyIconSvg from '@assets/icons/money-icon.svg';
import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import CheckboxCheckedIconSvg from '@assets/icons/checkbox-checked-icon.svg';

import * as S from './styles';
import { OptionInterface, OptionsInterface } from '@interfaces/OrderDataInterface';

const ItemDetail: React.FC = () => {
  const { order } = useContext(OrderContext);
  const { options } = order;

  const [dynamicFieldsInitialValues, setDynamicFieldsInitialValues] = useState({});

  useEffect(() => {
    if (!options?.length) return;

    setDynamicFieldsInitialValues(
      options.reduce((fields, currentOption) => {
        const hasQuantityOption = currentOption.optionList && currentOption.hasQuantity && currentOption.maxOption <= 1;
        if (hasQuantityOption) {
          const quantityOption = currentOption.optionList.map((option) => {
            return currentOption.name + '_' + option.label;
          });

          return {
            ...fields,
            ...quantityOption.reduce((acc, name) => ({ ...acc, [name]: 0 }), {})
          };
        }
        return {
          ...fields,
          [currentOption.name]: ''
        };
      }, {})
    );
  }, [options]);

  const isRadioInput = (optionGroup: OptionsInterface) => {
    return !optionGroup.hasQuantity && optionGroup.maxOption <= 1;
  };

  const isNumberInput = (optionGroup: OptionsInterface) => {
    return optionGroup.hasQuantity && optionGroup.maxOption <= 1;
  };

  const isCheckboxInput = (optionGroup: OptionsInterface) => {
    return optionGroup.maxOption > 1;
  };

  const renderOptionPriceOrSpecialOffer = (option: OptionInterface) => {
    if (!(option.price > 0)) return;

    const isSpecialOffer = option.saleOriginalPrice > 0;

    if (isSpecialOffer) {
      <p>
        de R$ {option.saleOriginalPrice} por <span> R$ {option.price}</span>
      </p>;
    }

    return <p className='option-price'>R$ {option.price}</p>;
  };

  return (
    <S.Container>
      <div className='establishment_info'>
        <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/matsuri_logo.png' alt='' />
        <h1>Matsuri Concept</h1>
      </div>

      <Formik
        initialValues={dynamicFieldsInitialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(JSON.stringify(values, null, 2));
          console.log(order);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <button type='submit' disabled={isSubmitting}>
              Fazer pedido
            </button>
            <>
              <section className='item-detail-wrapper  item-detail-padding'>
                <div>
                  <div className='item-detail-info'>
                    <p className='item-detail-name'>{order.name}</p>
                    <p className='item-detail-price'>
                      a partir de <span>R$ {order.price}</span>
                    </p>
                    <p className='item-detail-description'>{order.description}</p>
                  </div>
                  <div className='order-amount-wrapper'>
                    <div>
                      <p>quantos?</p>
                      <p className='order-amount'>
                        total <span>R$ {JSON.stringify(values)}</span>
                      </p>
                    </div>
                    {values[order.name] <= 0 || values[order.name] === undefined ? (
                      <button
                        className='add-item-button'
                        onClick={(event) => {
                          event.preventDefault();
                          setFieldValue(order.name, (values[order.name] || 0) + 1);
                        }}
                      >
                        adicionar
                      </button>
                    ) : (
                      <NumberInput name={order.name} width='32px' height='32px' />
                    )}
                  </div>
                </div>
                <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/ceviche_de_salmao.png' alt='' />
              </section>
              <Divider />
              <section className='item-option-input-container'>
                {options &&
                  options.map((optionGroup, index) => (
                    <fieldset>
                      <div className='option-wrapper'>
                        <div className='option-info-wrapper'>
                          <div>
                            <legend className='option-name'>{optionGroup.name}</legend>
                            <p className='option-description'>{optionGroup.description}</p>
                          </div>
                          {optionGroup.optionIsRequired && <div className='required-option-tag'>obrigatório</div>}
                        </div>

                        <div className='option-list'>
                          {optionGroup.optionList &&
                            isNumberInput(optionGroup) &&
                            optionGroup.optionList.map((option, index) => (
                              <S.InputContainer>
                                <div>
                                  <NumberInput name={optionGroup.name + '_' + option.label} />
                                  {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                                  <label>{option.label}</label>
                                </div>
                                <div className='option-price-wrapper'>{renderOptionPriceOrSpecialOffer(option)}</div>
                              </S.InputContainer>
                            ))}
                          {optionGroup.optionList &&
                            isRadioInput(optionGroup) &&
                            optionGroup.optionList.map((option, index) => (
                              <S.InputContainer>
                                <div>
                                  <Field type='radio' name={optionGroup.name} value={option.label} />

                                  {values[optionGroup.name] === option.label && (
                                    <img className='option-icons' src={RadioCheckedIconSvg} />
                                  )}
                                  {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}

                                  {values[optionGroup.name] === option.label ? (
                                    <>
                                      <S.HighlightLabel>{option.label}</S.HighlightLabel>
                                    </>
                                  ) : (
                                    <label>{option.label}</label>
                                  )}
                                </div>
                                <div className='option-price-wrapper'>{renderOptionPriceOrSpecialOffer(option)}</div>
                              </S.InputContainer>
                            ))}

                          {optionGroup.optionList &&
                            isCheckboxInput(optionGroup) &&
                            optionGroup.optionList.map((option, index) => (
                              <S.InputContainer>
                                <div>
                                  <Field
                                    type='checkbox'
                                    name={optionGroup.name}
                                    value={option.label}
                                    as={S.CheckboxInput}
                                  />

                                  {values[optionGroup.name] === option.label && (
                                    <img className='option-icons' src={CheckboxCheckedIconSvg} width={10} height={10} />
                                  )}

                                  {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}

                                  {values[optionGroup.name] === option.label ? (
                                    <>
                                      <S.HighlightLabel>{option.label}</S.HighlightLabel>
                                    </>
                                  ) : (
                                    <label>{option.label}</label>
                                  )}
                                </div>
                                <div className='option-price-wrapper'>{renderOptionPriceOrSpecialOffer(option)}</div>
                              </S.InputContainer>
                            ))}
                        </div>
                      </div>
                      <Divider />
                    </fieldset>
                  ))}
              </section>
              <section className='observation-wrapper'>
                <Field
                  as='textarea'
                  name='observation'
                  placeholder='alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato'
                />
              </section>
            </>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default ItemDetail;
