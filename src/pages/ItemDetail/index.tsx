import Divider from '@components/Divider';

import * as S from './styles';
import ItemOptionInput from '@pages/ItemDetail/components/ItemOptionInput';

const ItemDetail: React.FC = () => {
  return (
    <S.Container>
      <div className='establishment_info'>
        <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/matsuri_logo.png' alt='' />
        <h1>Matsuri Concept</h1>
      </div>

      <form>
        <div className='item-detail-wrapper item-detail-padding'>
          <div>
            <div className='item-detail-info'>
              <p className='item-detail-name'>Ceviche de salmão</p>
              <p className='item-detail-price'>
                a partir de <span>R$ 19,90</span>
              </p>
              <p className='item-detail-description'>salmão temperado com limão, cebola e pimenta</p>
            </div>

            <div className='order-amount-wrapper'>
              <p>quantos?</p>
              <p className='order-amount'>
                total <span>R$ 29,90</span>
              </p>
            </div>
          </div>
          <img src='https://raw.githubusercontent.com/marcosdissotti/images/main/ceviche_de_salmao.png' alt='' />
        </div>
        <Divider />
        <ItemOptionInput />
        <Divider />
      </form>
    </S.Container>
  );
};

export default ItemDetail;
