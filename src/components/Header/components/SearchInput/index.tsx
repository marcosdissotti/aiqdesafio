import * as S from './styles';
import SearchIconSvg from '@assets/icons/search-icon.svg';

const SearchInput: React.FC = () => {
  return (
    <S.Container>
      <img src={SearchIconSvg} alt='ícone de pesquisa de loja ou culinária' />
      <input className='search-input' placeholder='busque pela loja ou culinária'></input>
    </S.Container>
  );
};

export default SearchInput;
