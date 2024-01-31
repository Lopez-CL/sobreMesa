import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import RecipeMain from './views/RecipeMain'
import FamilyCookBooks from './components/FamilyCookBooks';
import RandomRecipe from './components/RandomRecipe';
import RecipeView from './components/RecipeView';
import UpdateRecipe from './views/UpdateRecipe';
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
          <Route exact path='/' element={<Navigate replace to='/recipeandBooks'/>}/>
          <Route exact path='/recipeandBooks' element={<Dashboard/>}/>
          <Route exact path='/view/recipe/:_id' element={<RecipeView/>}/>
          <Route exact path='/addrecipe' element={<RecipeMain/>}/>
          <Route exact path='/updaterecipe/:_id' element={<UpdateRecipe/>}/>
          <Route exact path='/familycookbooks' element={<FamilyCookBooks/>}/>
          <Route exact path='/randomrecipe' element={<RandomRecipe/>}/>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
