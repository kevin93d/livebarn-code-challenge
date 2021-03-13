import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const theme = {
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
