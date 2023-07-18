
import { useEffect, useState } from 'react';

import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import { API_URL } from '../../API';
import axios from 'axios';
import './SliderCards.scss';
import { Link, useNavigate } from 'react-router-dom';


// interface ISmallCard {
//     isbn13: number;
//     title: string;
//     image: string;
//     authors: string;
//     year: number;
//     price: string | number;
// }

  
  export const SliderCards = () => {
    const [books,setBooks] = useState([]);

    const navigate = useNavigate();
    


    useEffect(() => {
        axios.get(API_URL).then (res => {
            console.log(res.data)
            setBooks(res.data)
        }).catch(err => console.log(err))
    }, [])

  

    return (
        <div className='slider-card__box'>
        {books.map((book) => (
        <div className='slider-card' key={book.id}>

                <div className='slider-card__content'>
                        <div className='slider-card__img-box'>
                            <img  className='slider-card__img' src={book.image_url} alt={''} onClick={() => navigate(`/books/${book.id}`)}/>
                        </div>
                        <div className='slider-card__text'>
                            <Typography  content={book.title} type='H3' />
                        </div>   
                           
                        <p className='slider-card__authors'>by {book.authors}, Apress 2018</p>   
                        <div className='slider-card__info'>
                            <p>$21</p>
                            <Rating/>
                        </div>
                </div>
        </div>
         ))}
        </div>
    )
};