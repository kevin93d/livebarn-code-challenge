import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
