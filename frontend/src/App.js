import Routes from "./Router/Routes";
import theme from "./Constants/theme"
import { ThemeProvider } from '@mui/material';
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    

    <ThemeProvider  theme={theme}>
    <GlobalState><Routes /></GlobalState>
    </ThemeProvider>
    

  )
  
}

export default App;
