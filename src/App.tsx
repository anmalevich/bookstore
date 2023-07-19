import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';


import { PageTemplate } from './components/PageTemplate/PageTemplate';


import { BookPage } from './pages/BookPage/BookPage';
import CartPage from './pages/CartPage/CartPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { MainPage } from './pages/MainPage/MainPage';



export const App: FC = () => {

    return (
      <PageTemplate>
        
          <Routes>
            <Route path='/new-releases' element={<MainPage/>}/>
            <Route path='/books/:id' element={<BookPage/>}/>
            <Route path='/favorites/' element={<FavoritesPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            {/* <Route path='/authorization' element={<BookPage/>}>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/sign-up' element={<SignUp/>}/>
            </Route> */}
          </Routes>
      
      </PageTemplate>
    )
   }