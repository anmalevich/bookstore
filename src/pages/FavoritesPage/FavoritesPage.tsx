import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isTemplateMiddle } from 'typescript';
import { BOOK_CARD_URL } from '../../API';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../components/context/appContext';
import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';
import { Product } from '../../components/mock/Product';
import { Rating } from '../../components/Rating/Rating';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './FavoritesPage.scss';

// interface IFavoritesPage {
// favItems: Product[];
// setFavItems: (items: Product[]) => void;
// }



export const FavoritesPage = () => {
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log('Favorites are', favorites);

    const favoritesChecker = (id: number): boolean => {
        const boolean = favorites.some((book) => book.id ===id);
        return boolean;
    }
    
    const navigate = useNavigate();

      

      return (
        <>
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div className='fav-page' key={book?.id}>
                <button onClick={() => navigate(`/books/${book?.id}`)}><img src={arrowLeft} alt="arrowLeft" /></button>
                <Typography content={'Favorites'} type={'H1'} />
                <div className="favoritesItem" key={book?.id}>
                  <div className='favoritesItem__main' >
                    <div className='favoritesItem__image'>
                      <img src={book?.image_url} alt="book" />
                    </div>
                    <div className='favoritesItem__info'>
                      <Typography content={book?.title} type={'H3'} />
                      <p className='favoritesItem__info__description'>by {book?.authors}, 2018</p>
                      <div className='favoritesItem__rating'>
                        <p className='favoritesItem__price'>$21</p>
                        <Rating />
                      </div>
                    </div>
                  </div>
                  {favoritesChecker(book.id) ? (
                    <Button onClick={() => removeFromFavorites(book.id)} type={'primary'} content={'Remove from Favorites'} />
                  ) : (
                    <Button onClick={() => addToFavorites(book)} type={'primary'} content={'Add to Favorites'} />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>
            <Typography content={'Favorites'} type={'H1'} />
            <Typography content={"You don't have any favorite books yet!"} type={'H3'} />
            </div>
          )}
        </>
      );
    }