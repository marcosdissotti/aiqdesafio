import LoginIconSvg from '@assets/icons/login-icon.svg';
import AiqfomeIconSvg from '@assets/icons/aiqfome-icon.svg';
import SearchInput from '@components/Header/components/SearchInput';
import DeliveryAddress from '@components/Header/components/DeliveryAddress';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <div>
        <div>
          <img className='aiqfome-logo' src={AiqfomeIconSvg} alt='logo da empresa do aplicativo de delivery aiqfome' />
        </div>
        <DeliveryAddress />
      </div>

      <SearchInput />
      <div className='login-button-wrapper'>
        <button className='login-button'>
          <img src={LoginIconSvg} />
          entrar
        </button>
      </div>
    </S.Container>
  );
};

export default Header;
