
import React from 'react';
import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import { useNavigate } from 'react-router-dom';

import './SmallCard.scss'

interface Book {
  id: number;
  title: string;
  authors: string;
  image_url: string;
}

interface SmallCardProps {
  books: Book[];
  onClick?: () => void;
}

export const SmallCard: React.FC<SmallCardProps> = ({ books }) => {
  const navigate = useNavigate();

  

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
    
  );
};