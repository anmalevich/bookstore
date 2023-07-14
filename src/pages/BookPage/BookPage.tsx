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
import { BookCard } from '../../components/BookCard/BookCard';
import { Product } from '../../components/mock/Product';
import CartPage from '../CartPage/CartPage';

interface IBookPage {
    image: string;
    title: string;
    price: string;
    year: string;
    authors: string;
    
}

export const BookPage: FC<IBookPage> = ({price, authors, image, title, year}) => {
    const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setPage('cart');
  };

  const handleGoToBookPage = () => {
    setPage('bookPage');
  };

    return (
        <div className="bookCard-page">
        {page === 'bookPage' ? (
            <>
                <a href="#" className="bookCard-page__arrow"><img src={arrowLeft} alt="arrowLeft" /></a>
                <Typography content={title} type={'H1'}/>
                <BookCard id={0} image={'https://itbook.store/img/books/9781617291609.png'} title={'MongoDB in Action, 2nd Edition'} price={32.10} year={2018} authors={'Julien Vehent'} addToCart={handleAddToCart} />
                <Subscription/>
                <SimilarBooks/>
            </>
        
          ) : (
          <div className='cartPage'>
            <button onClick={handleGoToBookPage}><img src={arrowLeft} alt="arrowLeft" /></button>
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        )}
      </div>
         )
        };
        


    //     <div className='bookCard-page'>
    //         <a href="#" className="bookCard-page__arrow"><img src={arrowLeft} alt="arrowLeft" /></a>
    //         <Typography content={title} type={'H1'}/>
            
    //         {!isOpen ? (
    //            <BookCard id={0} image={'https://itbook.store/img/books/9781617291609.png'} title={'MongoDB in Action, 2nd Edition'} price={32.10} year={2018} authors={'Julien Vehent'} addToCart={handleAddToCart} />
    //         ) : (
    //             <div>
    //                 <BookCard id={0} image={'https://itbook.store/img/books/9781617291609.png'} title={'MongoDB in Action, 2nd Edition'} price={32.10} year={2018} authors={'Julien Vehent'} addToCart={handleAddToCart} />
    //                 <MoreDetailse/>
    //             </div>
    //         )}
    //         <Subscription/>
    //         <SimilarBooks/>
       
    //    </div>
 