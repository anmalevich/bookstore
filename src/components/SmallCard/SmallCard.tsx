import { FC } from 'react';
import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import './SmallCard.scss';

interface ISmallCard {
    isbn13: number;
    title: string;
    image: string;
    authors: string;
    year: number;
    price: string | number;
    color?: 'blue' | 'pink' | 'orange' | 'green';
}

export const SmallCard: FC<ISmallCard> = ({isbn13, title, image, authors, year, price, color}) => {

    return (
        <div className='small-card'>
            <div className='small-card__content'>
                    <div className='small-card__img-box'>
                        <img className='small-card__img' src={image} alt={title} />
                    </div>
                    <div className='small-card__text'>
                        <Typography content={title} type='H3' isLink/>
                        <p>by {authors}, Apress {year}</p>
                        </div>
                    <div className='small-card__info'>
                        {price}
                        <Rating/>
                    </div>
            </div>
        </div>
    )
};