import { ThemeProvider } from 'styled-components';

import Header from '@components/Header';
import Footer from '@components/Footer';
import ItemDetail from '@pages/ItemDetail';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { OrderProvider } from '@contexts/OrderContext';

const App: React.FC = () => {
  return (
    <OrderProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <ItemDetail />
        <GlobalStyle />
        {/* <Footer /> */}
      </ThemeProvider>
    </OrderProvider>
  );
};

export default App;
