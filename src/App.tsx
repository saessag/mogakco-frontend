import { BrowserRouter } from 'react-router-dom';
import appRoutes from './pages';

// global-style-setting
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/Global';
import theme from '@styles/Theme';

// TODO: need combine Provider
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename='/'>{appRoutes()}</BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
