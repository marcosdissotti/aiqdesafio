import { useRouteError, useLocation } from 'react-router-dom';

import ServerDownIconSvg from '@assets/icons/server_down.svg';
import PageNotFoundIconSvg from '@assets/icons/page-not-found.svg';

import * as S from './styles';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const location = useLocation();

  const isAxiosConnetionError = location.pathname === '/error';

  return (
    <S.Container>
      <h1>Oops!</h1>
      {isAxiosConnetionError && (
        <p>
          Algum erro ocorreu, verifique se você está com o json-server em funcionamento com o arquivo db.json na porta
          3001.
        </p>
      )}
      {error.status === 404 && (
        <p>Algum erro ocorreu, verifique se você está acessando a rota correta, está página não foi encontrada.</p>
      )}
      <i>{!isAxiosConnetionError && (error.statusText || error.message)}</i>
      {error.status === 404 && <img src={PageNotFoundIconSvg} />}\
      {location.pathname === '/error' && <img src={ServerDownIconSvg} />}
    </S.Container>
  );
};

export default ErrorPage;
