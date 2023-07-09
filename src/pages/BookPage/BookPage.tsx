import { FC, useState } from 'react';

import chevronDown from '../../icons/chevron-down.svg'

import { ArrowsButton } from '../../components/ArrowsButton/ArrowsButton';
import { Button } from '../../components/Button/Button';
import { FavoriteButton } from '../../components/FavoriteButton/FavoriteButton';
import { MoreDetailse } from '../../components/MoreDetailse/MoreDetailse';
import { Rating } from '../../components/Rating/Rating';
import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './BookPage.scss';
import { SimilarBooks } from '../../components/SimilarBooks/SimilarBooks';

interface IBookPage {
    image: string;
    title: string;
    price: string;
    year: string;
    authors: string;
    
}

export const BookPage: FC<IBookPage> = ({price, authors, image, title, year}) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const handleClick = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className='bookCard-page'>
            <a href="#" className="bookCard-page__arrow"><img src={arrowLeft} alt="arrowLeft" /></a>
            <Typography content={title} type={'H1'}/>
            
            {!isOpen ? (
                <div className='bookCard'>
                <div className='bookCard__image'>
                    <img src={image} alt="book" />
                    <FavoriteButton isDisabled={false} type={'favorite'}/>
                </div>
                <div className='bookCard__info'>
                    <div className='bookCard__info-bold'>
                        {price}
                        <Rating/>
                    </div>
                    <div className='bookCard__info-primary'>
                        <div className='bookCard__info-primary__main'>
                            <p>Authors</p>
                            <p>Publisher</p>
                            <p>Language</p>
                            <p>Format</p>
                        </div>
                        <div className='bookCard__info-primary__bold'>
                            <p>{authors}</p>
                            <p>Apress, {year}</p>
                            <p>English</p>
                            <p>English Paper book / ebook (PDF)</p>
                        </div>  
                    </div>
                    <button className='bookCard__drop-down' onClick={handleClick}>
                        <p>More detalise</p> 
                        <img src={chevronDown} alt="chevron" />
                    </button>
                    <div className='bookCard__button'>
                        <Button type={'primary'} content={'Add to cart'}/>
                        <p>Preview book</p>
                    </div>
                </div>
        </div>
            ) : (
                <div>
                    <div className='bookCard'>
                    <div className='bookCard__image'>
                        <img src={image} alt="book" />
                        <FavoriteButton isDisabled={false} type={'favorite'}/>
                    </div>
                    <div className='bookCard__info'>
                        <div className='bookCard__info-bold'>
                            {price}
                            <Rating/>
                        </div>
                        <div className='bookCard__info-primary'>
                            <div className='bookCard__info-primary__main'>
                                <p>Authors</p>
                                <p>Publisher</p>
                                <p>Language</p>
                                <p>Format</p>
                            </div>
                            <div className='bookCard__info-primary__bold'>
                                <p>{authors}</p>
                                <p>Apress, {year}</p>
                                <p>English</p>
                                <p>English Paper book / ebook (PDF)</p>
                            </div>  
                        </div>
                        <button className='bookCard__drop-down' onClick={handleClick}>
                            <p>More detalise</p> 
                            <img src={chevronDown} alt="chevron" />
                        </button>
                        <div className='bookCard__button'>
                            <Button type={'primary'} content={'Add to cart'}/>
                            <p>Preview book</p>
                        </div>
                    </div>
            </div>
                    <MoreDetailse/>
                </div>
            )}
            <Subscription/>
            <SimilarBooks/>
       
       </div>
    )
};
