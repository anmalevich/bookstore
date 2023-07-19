import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../components/context/appContext';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './CartPage.scss'

const CartPage = () => {
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  // const [totalPrice, setTotalPrice] = useState<number>(0);
  const {cart, addToCart, removeFromCart} = useAppContext();
  const navigate = useNavigate();
  const bookPrice = 21;
  const totalPrice = cart.length * bookPrice;

  console.log('Cart are', cart);

  const cartChecker = (id: number): boolean => {
    const boolean = cart.some((book) => book.id ===id);
    return boolean;
  }
  
  return (
    <div className="cart-page">
        <button className='arrow-left' onClick={() => navigate(`/new-releases`)}><img src={arrowLeft} alt="arrowLeft" /></button>
        <Typography content='Your cart' type={'H1'}/>
      
      {cart.length === 0 ? (
        <Typography content={"Your cart is empty!"} type={'H3'} />
      ) : (
        <div>
          {cart.map((book) => (
             <div className="cartItem">
                <div className='cartItem__main'>
                    <div className='cartItem__image'>
                        <img src={book?.image_url} alt="" />
                    </div>
                    <div className='cartItem__info'>
                        <Typography content={book?.title} type={'H3'}/>
                        <p>by {book?.authors}, 2018</p>
                        <p>{book?.format}</p>
                        <p>{book?.genres}</p>
                    </div>
                </div>
             <p className='cartItem__price'><span>$</span>21</p>
             <button className='cartItem__close' onClick= {()=>{removeFromCart(book?.id)}}>X</button> 
         </div>
          ))}
          <div className='cart-page__check-out'>
              <div className="cart-page__check-out__main">
                <div className="totals">
                  <div className='totals__price'>
                      <p>Sum total</p>
                      <p>VAT</p>
                      <p className='totals__total-price'>TOTAL:</p>
                  </div>
                  <div className='totals__vat'>
                      <p>${totalPrice}</p>
                      <p>$12.5</p>
                      <p className='totals__total-price'>${totalPrice + 12.5}</p>
                  </div>
                </div>
                  <Button type={'primary'} content={'Check out'}/>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;