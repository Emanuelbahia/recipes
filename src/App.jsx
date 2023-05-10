import { Route, Routes } from 'react-router-dom';
import Category from './components/categories/Category';
import Home from './pages/home/Home';
import SubCategories from './components/sub categories/SubCategories';
import './App.css'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Search from './pages/search/Search';
import NotFound from './pages/not found/NotFound';

function App() {
 
  //en category se muestran las 12 categorias
  //con /* puedo seguir anidando mas rutas en el componente que renderizo
  //a la ruta NotFound la pongo por afuera para que se cargue como outlet y me aparezca el header y footer 
  return (
   <>
    <Routes>
      <Route path='/' element={ <Home/> } >
        <Route index element={ <Category/> } />
        <Route path='category/*' element={ <SubCategories/> } /> 
        <Route path='login' element={ <Login/> } />
        <Route path='register' element={ <Register/> } />
        <Route path='search' element={ <Search/> } />
      </Route>
      <Route path='*' element={ <NotFound/> } />
    </Routes>
   </>
  )
}

export default App
