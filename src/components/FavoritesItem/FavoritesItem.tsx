import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_CARD_URL, BOOK_FAV_URL } from '../../API';
import { useAppContext } from '../context/appContext';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import './FavoritesItem.scss';


export const FavoritesItem= () => {
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
    
   
    return (
        <div className="favoritesItem" key={book?.id}>
            <div className='favoritesItem__main' >
                <div className='favoritesItem__image'>
                    <img src={book?.image_url} alt="book" />
                </div>
                <div className='favoritesItem__info'>
                    <Typography content={book?.title} type={'H3'}/>
                    <p className='favoritesItem__info__description'>by {book?.authors}, 2018</p>
                    <div className='favoritesItem__rating'>
                        <p className='favoritesItem__price'>$21</p>
                        <Rating/>
                    </div>
                </div>
            </div>
        </div>
    )
};
