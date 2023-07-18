import { FC } from 'react';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Rating } from '../Rating/Rating';
import { Typography } from '../Typography/Typography';
import './FavoritesItem.scss';

interface IFavoritesItem {
    id: number;
    image: string;
    title: string;
    authors: string;
    year: number;
    price: number;
    removeFromFav?: (id: number) => void;
}

export const FavoritesItem: FC<IFavoritesItem> = ({id, image, title, authors, year, price, removeFromFav}) => {
    const handleRemoveFromFav= () => {
        // removeFromFav(id);
      };

    return (
        <div className="favoritesItem">
            <div className='favoritesItem__main'>
                <div className='favoritesItem__image'>
                    <img src={image} alt="" />
                </div>
                <div className='favoritesItem__info'>
                    <Typography content={title} type={'H3'}/>
                    <p className='favoritesItem__info__description'>by {authors}, {year}</p>
                    <div className='favoritesItem__rating'>
                        <p className='favoritesItem__price'>${price}</p>
                        <Rating/>
                    </div>
                </div>
            </div>
             <FavoriteButton onClick={handleRemoveFromFav} isDisabled={false} type={'favorite'}/>
        </div>
    )
};
