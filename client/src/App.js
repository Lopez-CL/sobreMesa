import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import RecipeForm from './components/RecipeForm';
import FamilyCookBooks from './components/FamilyCookBooks';
import RandomRecipe from './components/RandomRecipe';
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
      <NavBar></NavBar>
        <Routes>
          {/* '/' will eventually be login page */}
          <Route exact path='/recipeandbooks' element={<Dashboard/>}/>
          <Route exact path='/addrecipe' element={<RecipeForm/>}/>
          <Route exact path='/familycookbooks' element={<FamilyCookBooks/>}/>
          <Route exact path='/randomrecipe' element={<RandomRecipe/>}/>
        </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
