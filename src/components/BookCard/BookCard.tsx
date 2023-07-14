import { FC, useState } from 'react';

import { Button } from '../Button/Button';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Rating } from '../Rating/Rating';


import chevronDown from '../../icons/chevron-down.svg'
import './BookCard.scss';
import { Product } from '../mock/Product';
import { MoreDetailse } from '../MoreDetailse/MoreDetailse';

interface IBookCard {
id: number;
  image: string;
  title: string;
  price: number;
  authors: string;
  year: number;
  addToCart: (product: Product) => void;


}

export const BookCard: FC<IBookCard> = ({id, image, price, authors, year, addToCart, title}) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const handleClick = () => {
        setIsOpen(!isOpen);
      };
    
      const handleAddToCart = () => {
        const product = {
          id,
          image,
          title,
          price,
          year,
          authors,
          
        };
        addToCart(product);
      };

      return(
       <>
            
            
            {!isOpen ? (
                <div className='bookCard'>
                    <div className='bookCard__image'>
                        <img src={image} alt="book" />
                        <FavoriteButton isDisabled={false} type={'favorite'}/>
                    </div>
                    <div className='bookCard__info'>
                        <div className='bookCard__info-bold'>
                            <p>${price}</p>
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
                            <Button onClick={handleAddToCart} type={'primary'} content={'Add to cart'}/>
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
                            <Button onClick={handleAddToCart} type={'primary'} content={'Add to cart'}/>
                            <p>Preview book</p>
                        </div>
                    </div>
            </div>
                    <MoreDetailse/>
                </div>
        )}
        </>
        
      )}