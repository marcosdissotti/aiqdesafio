import LocationIconSvg from '@assets/icons/location-icon.svg';
import RightArrowIconSvg from '@assets/icons/right-arrow-icon.svg';

import * as S from './styles';

const DeliveryAddress: React.FC = () => {
  return (
    <S.Container>
      <img src={LocationIconSvg} alt='icone de localização da entrega' />
      <div>
        <span>entregando em</span>
        <S.AddressWrapper>
          <p>Rua Mandaguari, 198</p>
          <img src={RightArrowIconSvg} />
        </S.AddressWrapper>
      </div>
    </S.Container>
  );
};

export default DeliveryAddress;
