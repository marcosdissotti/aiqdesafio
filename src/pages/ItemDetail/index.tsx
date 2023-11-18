import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';

import Divider from '@components/Divider';

import NumberInput from '@components/NumberInput';
import { OrderContext } from '@contexts/OrderContext';

import MoneyIconSvg from '@assets/icons/money-icon.svg';
import RadioCheckedIconSvg from '@assets/icons/radio-checked.svg';
import CheckboxCheckedIconSvg from '@assets/icons/checkbox-checked-icon.svg';
// import CheckboxIconSvg from '@assets/icons/checkbox-icon.svg';

import * as S from './styles';

const ItemDetail: React.FC = () => {
  const { order } = useContext(OrderContext);
  const { options } = order;

  const [dynamicFieldsInitialValues, setDynamicFieldsInitialValues] = useState({});
  /**

optionGroup.optionList &&
optionGroup.hasQuantity &&
optionGroup.maxOption <= 1

optionGroup.name + '_' + option.label
 */
  useEffect(() => {
    console.log('options', options);
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

  console.log('dynamicFieldsInitialValues', dynamicFieldsInitialValues);

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
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
            <>
              <div className='item-detail-wrapper  item-detail-padding'>
                <div>
                  <div className='item-detail-info'>
                    <p className='item-detail-name'>{order.name}</p>
                    <p className='item-detail-price'>
                      a partir de <span>R$ {order.price}</span>
                    </p>
                    <p className='item-detail-description'>{order.description}</p>
                  </div>
                  {/* <NumberInput width='32px' height='32px' /> */}
                  <div className='order-amount-wrapper'>
                    <p>quantos?</p>
                    <p className='order-amount'>
                      total <span>R$ {JSON.stringify(values)}</span>
                    </p>
                  </div>
                </div>
                <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/ceviche_de_salmao.png' alt='' />
              </div>
              <Divider />
              <div className='item-option-input-container'>
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
                                  <NumberInput name={optionGroup.name + '_' + option.label} />

                                  {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}
                                  <label>{option.label}</label>
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
                                  <Field type='radio' name={optionGroup.name} value={option.label} />

                                  {values[optionGroup.name] === option.label && (
                                    <img className='option-icons' src={RadioCheckedIconSvg} />
                                  )}
                                  {option.saleOriginalPrice > 0 && <img className='option-icons' src={MoneyIconSvg} />}

                                  {values[optionGroup.name] === option.label ? (
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
              </div>
              <div className='observation-wrapper'>
                <textarea
                  name={order.observation}
                  placeholder='alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato'
                />
              </div>
              <button type='submit'>Fazer pedido</button>
            </>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default ItemDetail;
