import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './components/Dashboard';
const theme = createTheme({
  palette:{
    primary: {
      main: '#FF8538',
      light: '#FFA557',
      dark: '#995112'
    },
    secondary: {
      main: '#38DBFF',
      light: '#C3F4FF',
      dark: '#0492B3'
    },
    action:{
      active: '#FFA557'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
