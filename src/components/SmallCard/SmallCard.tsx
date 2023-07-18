
import { useEffect, useState } from 'react';

import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import { API_URL } from '../../API';
import axios from 'axios';
import './SmallCard.scss';
import { Link, useNavigate } from 'react-router-dom';


  
  export const SmallCard = () => {
    const [books,setBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL).then (res => {
            console.log(res.data)
            setBooks(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='small-card__box'>
        {books.map((book) => (
        <div className='small-card' key={book.id}>

                <div className='small-card__content'>
                        <div className='small-card__img-box'>
                            <img  className='small-card__img' src={book.image_url} alt={''} onClick={() => navigate(`/books/${book.id}`)}/>
                        </div>
                        <div className='small-card__text'>
                            <Typography  content={book.title} type='H3' />
                        </div>   
                           
                        <p className='small-card__authors'>by {book.authors}, Apress 2018</p>   
                        <div className='small-card__info'>
                            <p>$21</p>
                            <Rating/>
                        </div>
                </div>
        </div>
         ))}
        </div>
    )
};