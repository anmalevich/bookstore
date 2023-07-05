import { FC, useState } from 'react';
import burgerMenu from '../../icons/Burger.svg';
import cancel from '../../icons/Cancel.svg';
import './BurgerMenu.scss';


interface IBurgerMenu {
}

export const BurgerMenu: FC<IBurgerMenu> = () => {
    const [isOpen, setIsOpen] = useState(false); // let isOpen = false;

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <button className='burgerMenu' onClick={handleClick}>
                {isOpen ? (
                    <img src={cancel} alt="cancel" />
                ) : (
                    <img src={burgerMenu} alt="burgerMenu" />
                )}
            </button>
        </>
    )
};