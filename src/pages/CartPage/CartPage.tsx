import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import { useAppContext } from '../../components/context/appContext';
import { Product } from '../../components/mock/Product';
import { Typography } from '../../components/Typography/Typography';
import arrowLeft from '../../icons/bigArrowLeft.svg'

import './CartPage.scss'

// type CartPageProps = {
//   cartItems: Product[];
//   setCartItems: (items: Product[]) => void;
// };

const CartPage = () => {
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // useEffect(() => {
  //   // При обновлении корзины пересчитываем итоговую цену
  //   const calculateTotalPrice = () => {
  //     const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  //     setTotalPrice(total);
  //   };
  //   calculateTotalPrice();
  // }, [cartItems]);

  // const handleRemoveFromCart = (id: number) => {
  //   const updatedItems = cartItems.filter((item) => item.id !== id);
  //   setCartItems(updatedItems);
  // };

  const {cart, addToCart, removeFromCart} = useAppContext();

    console.log('Cart are', cart);

    const cartChecker = (id: number): boolean => {
        const boolean = cart.some((book) => book.id ===id);
        return boolean;
    }
    
    const navigate = useNavigate();


  // useEffect(() => {
  //   // Сохранение состояния корзины в локальном хранилище
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  const handleGoToBookPage = () => {
    setPage('bookPage');
  };
  return (
    <div className="cart-page">
        <button onClick={() => navigate(`/new-releases`)}><img src={arrowLeft} alt="arrowLeft" /></button>
        <Typography content='Your cart' type={'H1'}/>
      
      {cart.length === 0 ? (
        <p>Cart is empty</p>
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
                        {/* <Typography content={description} type={'B2'}/> */}
                        {/* <div>
                          <button onClick={handleDecreaseQuantity}>-</button>
                          <span>{quantity}</span>
                          <button onClick={handleIncreaseQuantity}>+</button>
                        </div> */}
                    </div>
                </div>
             <p className='cartItem__price'>$21</p>
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
                  
                  {/* <button onClick={handleClearCart}>Clear Cart</button> */}
              </div>
              
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;