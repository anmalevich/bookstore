import { FC, useState } from 'react';

import user from '../../icons/account.svg';
import favorite from '../../icons/blackBorderFavorites.svg';
import cart from '../../icons/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { Search } from '../Search/Search';

export const Header: FC = () => {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (buttonName : string) => {
        setActiveButton(buttonName);
    };


    return (
        <header className='header'>
            <p className='header__text'>Bookstore</p>
            <Search/>
            <div className='header__pages'>
                <button 
                    className={`button ${activeButton === 'button1' ? 'active' : ''}`}
                    onClick={ () => handleButtonClick('button1')}
                >
                    <img src={favorite} alt="favoritesPage" onClick={() => navigate(`/favorites`)}/>
                </button> 
                <button
                    className={`button ${activeButton === 'button2' ? 'active' : ''}`}
                    onClick={ () => handleButtonClick('button2')}
                >
                    <img src={cart} alt="cartPage" onClick={() => navigate(`/cart`)}/>
                </button>
                <button
                    className={`button ${activeButton === 'button3' ? 'active' : ''}`}
                    onClick={ () => handleButtonClick('button3')}
                >
                    <img src={user} alt="accountPage" onClick={() => navigate(`/authorization`)}/>
                </button>
            </div>
            
        </header>
    )
};
