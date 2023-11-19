import { useRouteError } from 'react-router-dom';

import PageNotFoundIconSvg from '@assets/icons/page-not-found.svg';

import * as S from './styles';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  return (
    <S.Container>
      <h1>Oops!</h1>
      <p>
        Desculpe, mas algum erro ocorreu, verifique se você está acessando a rota correta ou está com o json-server
        habilitado.
      </p>
      <i>{error.statusText || error.message}</i>
      {error.status === 404 && <img src={PageNotFoundIconSvg} />}
    </S.Container>
  );
};

export default ErrorPage;
