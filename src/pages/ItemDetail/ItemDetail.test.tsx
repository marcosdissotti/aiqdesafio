import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@styles/themes/default';

import ItemDetail from '.';
import { OrderContext } from '@contexts/OrderContext';

const mockSetOrder = jest.fn();

const orderData = {
  loading: false,
  price: 19.9,
  name: 'Ceviche de salmão',
  description: 'salmão temperado com limão, cebola e pimenta',
  quantity: 0,
  amount: 0,
  observation: '',
  options: [
    {
      name: 'qual o tamanho?',
      description: 'escolha 1',
      hasQuantity: false,
      maxOption: 1,
      optionIsRequired: true,
      optionList: [
        {
          label: 'médio',
          price: 19.9,
          saleOriginalPrice: 22.9,
          quantity: 0
        },
        {
          label: 'grande',
          price: 28.9,
          saleOriginalPrice: 0,
          quantity: 0
        }
      ]
    },
    {
      name: 'vai querer bebida?',
      description: 'escolha quantos quiser',
      hasQuantity: true,
      maxOption: 0,
      optionIsRequired: false,
      optionList: [
        {
          label: 'coca-cola',
          price: 10.0,
          saleOriginalPrice: 0,
          quantity: 2
        },
        {
          label: 'suco prats laranja',
          price: 6.0,
          optionIsRequired: 0,
          quantity: 0
        },
        {
          label: 'água sem gás',
          price: 3.0,
          optionIsRequired: 0,
          quantity: 0
        }
      ]
    },
    {
      name: 'precisa de talher?',
      description: 'escolha até 1',
      hasQuantity: false,
      maxOption: 1,
      optionIsRequired: false,
      optionList: [
        {
          label: 'hashi',
          price: 0.0,
          optionIsRequired: 0,
          quantity: 0
        },
        {
          label: 'garfo e faca descartável',
          price: 1.0,
          optionIsRequired: 0,
          quantity: 0
        }
      ]
    },
    {
      name: 'mais alguma coisa?',
      description: 'escolha até 2',
      hasQuantity: false,
      maxOption: 2,
      optionIsRequired: false,
      optionList: [
        {
          label: 'biscoito da sorte',
          price: 2.0,
          optionIsRequired: 0,
          quantity: 0
        },
        {
          label: 'rolinho primavera',
          price: 8.0,
          optionIsRequired: 0,
          quantity: 0
        }
      ]
    }
  ]
};

describe('Pages - <ItemDetail />', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <OrderContext.Provider value={{ order: orderData, setOrder: mockSetOrder }}>
          <ItemDetail />
        </OrderContext.Provider>
      </ThemeProvider>
    );
  });
});
