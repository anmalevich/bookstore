import { useEffect, useState } from 'react';

import { Typography } from '../Typography/Typography';
import { API_URL } from '../../API';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';

import axios from 'axios';
import './SliderCards.scss';


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
                            <ReactStars
                                count={5}
                                value = {book.rating}
                                size={24}
                                color1={'#cccccc'}
                                color2={'#FEBE00'}
                                edit={false}
                            />
                        </div>
                </div>
        </div>
         ))}
        </div>
    )
};