import { FC } from 'react';
import { Typography } from '../Typography/Typography';
import './FullCard.scss';
import { ActionsCard } from '../ActionsCard/ActionsCard';

interface IFullCard {
    isbn13: number;
    title: string;
    image: string;
    authors: string;
    year: number;
    price: string | number;
}

export const FullCard: FC<IFullCard> = ({isbn13, title, image, authors, year, price}) => {

    return (
        <div className='full-card'>
            <div className='full-card__content'>
                <div>
                    <Typography content={title} type='H1' isLink/>

                    {/* <p className='full-card__text'>{text}</p>
                    <div></div> */}
                </div>
                <div>
                    <div className='full-card__img-box'>
                        <img className='full-card__img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <ActionsCard />
        </div>
    )
};