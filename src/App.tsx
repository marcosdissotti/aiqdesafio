import { ThemeProvider } from 'styled-components';

import Header from '@components/Header';
import ItemDetail from '@pages/ItemDetail';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <ItemDetail />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
