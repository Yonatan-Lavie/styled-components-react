import { ThemeProvider } from 'styled-components';
import { Header } from './conponenets/Header';
import { Container } from './conponenets/styles/Container.styled';
import GlobalStyles from './conponenets/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#ffffff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
