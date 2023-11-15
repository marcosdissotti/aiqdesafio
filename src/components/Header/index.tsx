import AiqfomeIconSvg from '@assets/icons/aiqfome-icon.svg';
import SearchIconSvg from '@assets/icons/search-icon.svg';

import DeliveryAddress from '@components/Header/components/DeliveryAddress';
import LoginIconSvg from '@assets/icons/login-icon.svg';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <div>
        <img className='aiqfome-logo' src={AiqfomeIconSvg} alt='logo da empresa do aplicativo de delivery aiqfome' />
        <DeliveryAddress />
      </div>
      <input className='search-input' placeholder='busque pela loja ou culinária'></input>
      <button className='login-button'>
        <img src={LoginIconSvg} />
        entrar
      </button>
    </S.Container>
  );
};

export default Header;
