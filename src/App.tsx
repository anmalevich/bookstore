import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { BookPage } from './pages/BookPage/BookPage';
import CartPage from './pages/CartPage/CartPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { MainPage } from './pages/MainPage/MainPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';



export const App: FC = () => {

    return (
      <PageTemplate>
        
          <Routes>
            <Route path='/new-releases' element={<MainPage/>}/>
            <Route path='/books/:id' element={<BookPage/>}/>
            <Route path='/favorites/' element={<FavoritesPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
            <Route path='/sign-up' element={<SignUpPage/>}/>
            <Route path='/reset-password' element={<ResetPasswordPage/>}/>
          </Routes>
      
      </PageTemplate>
    )
   }