import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { OrderProvider } from '@contexts/OrderContext';

const App: React.FC = () => {
  return (
    <OrderProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Outlet />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </OrderProvider>
  );
};

export default App;
