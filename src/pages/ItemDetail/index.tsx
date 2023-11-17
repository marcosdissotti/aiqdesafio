import { useEffect, useContext } from 'react';

import Divider from '@components/Divider';

import { OrderContext } from '@contexts/OrderContext';
import ItemOptionInput from '@pages/ItemDetail/components/ItemOptionInput';

import * as S from './styles';

const ItemDetail: React.FC = () => {
  const { order } = useContext(OrderContext);

  return (
    <S.Container>
      {console.log('order', order)}

      <div className='establishment_info'>
        <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/matsuri_logo.png' alt='' />
        <h1>Matsuri Concept</h1>
      </div>

      <form>
        <div className='item-detail-wrapper  item-detail-padding'>
          <div>
            <div className='item-detail-info'>
              <p className='item-detail-name'>{order.name}</p>
              <p className='item-detail-price'>
                a partir de <span>R$ {order.price}</span>
              </p>
              <p className='item-detail-description'>{order.description}</p>
            </div>

            <div className='order-amount-wrapper'>
              <p>quantos?</p>
              <p className='order-amount'>
                total <span>R$ {order.amount}</span>
              </p>
            </div>
          </div>
          <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/ceviche_de_salmao.png' alt='' />
        </div>
        <Divider />
        <ItemOptionInput options={order.options} />
        <div className='observation-wrapper'>
          <textarea
            name={order.observation}
            placeholder='alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato'
          />
        </div>
      </form>
    </S.Container>
  );
};

export default ItemDetail;
