import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isTemplateMiddle } from 'typescript';
import { BOOK_CARD_URL } from '../../API';
import { useAppContext } from '../../components/context/appContext';
import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';
import { Product } from '../../components/mock/Product';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './FavoritesPage.scss';

// interface IFavoritesPage {
// favItems: Product[];
// setFavItems: (items: Product[]) => void;
// }



export const FavoritesPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const navigate = useNavigate();
  const [book,setBook] = useState({});
  const { id } = useParams();
    


    useEffect(() => {
        axios
            .get(`${BOOK_CARD_URL}/${id}`)
            .then (res => {
            console.log(res.data)
            setBook(res.data)
        }).catch(err => console.log(err))
    }, [id])
  
  const removeBookFromFavorites = (id: number) => {
    setFavoriteBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  }
    
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  

    const handleGoToBookPage = () => {
        setPage('bookPage');
      };

      

    return (
        <div className='fav-page'>
            <button onClick={handleGoToBookPage}><img src={arrowLeft} alt="arrowLeft" /></button>
            <Typography content={'Favorites'} type={'H1'}/>
      
            {favoriteBooks.length === 0 ? (
                 <p>There is no your favorite books</p>
            ) : (
                <>
                    { favoriteBooks.map((book) => (
                    <FavoritesItem key={book.id} book={book} removeFromFavorites = {() => removeBookFromFavorites(book.id)}/>
                    ))}
                  
                </>
            )}
        </div>
    )};



    // interface IFavoritesPage {
    //   favItems: Product[];
    //   setFavItems: (items: Product[]) => void;
    //   }
      
    //   export const FavoritesPage: FC<IFavoritesPage> = ({ favItems, setFavItems }) => {
    //       const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
      
    //       const handleGoToBookPage = () => {
    //           setPage('bookPage');
    //         };
          
    //       const handleRemoveFromFav = (id: number) => {
    //           const updatedItems = favItems.filter((item) => item.id !== id);
    //           setFavItems(updatedItems);
    //         };
      
    //         useEffect(() => {
    //           // Сохранение состояния корзины в локальном хранилище
    //           localStorage.setItem('favItems', JSON.stringify(favItems));
    //         }, [favItems]);
          