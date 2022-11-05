import { ThemeProvider } from 'styled-components';
import { Header } from './conponenets/Header';
import { Container } from './conponenets/styles/Container.styled';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#ffffff',
    footer: '#003333',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
