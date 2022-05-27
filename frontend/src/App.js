import Routes from "./Router/Routes";
import theme from "./Constants/theme"
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    
  <ThemeProvider  theme={theme}>
  <Routes />
  </ThemeProvider>
  
  )
  
}

export default App;
