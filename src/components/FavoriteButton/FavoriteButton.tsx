import { FC, useState } from 'react';
import favorite from '../../icons/Favorites.svg';
import redFavorite from '../../icons/FilledFavorites.svg';
import './FavoriteButton.scss';

interface IFavoriteButton {
    isDisabled: boolean;
    type: 'favorite';
}

export const FavoriteButton: FC<IFavoriteButton> = ({ isDisabled,  type}) => {

    const [isOpen, setIsOpen] = useState(false); // let isOpen = false;

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    const favoriteButtonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'}`

    return (
        <button
          className={favoriteButtonClass}
          onClick={handleClick}
          disabled={isDisabled}
        >
            {isDisabled ? (
                <img src={favorite} alt="favorite" />
            ) : (
                isOpen ? (
                <img src={favorite} alt="favorite" />
            ) : (
                <img src={redFavorite} alt="RedFavorite" />
            ))}
            
        </button>
    )
}