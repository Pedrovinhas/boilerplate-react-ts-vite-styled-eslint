import { ThemeProvider } from 'styled-components';
import { Router } from './routes/routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {/* <h1> Hello World ! </h1> */}
            <Router/>
        </ThemeProvider>
    );
}

export default App;
