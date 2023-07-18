import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import { Product } from '../../components/mock/Product';
import { Typography } from '../../components/Typography/Typography';
import arrowLeft from '../../icons/bigArrowLeft.svg'

import './CartPage.scss'

type CartPageProps = {
  cartItems: Product[];
  setCartItems: (items: Product[]) => void;
};

const CartPage = ({ cartItems, setCartItems }: CartPageProps) => {
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // При обновлении корзины пересчитываем итоговую цену
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems]);

  const handleRemoveFromCart = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // const handleIncreaseQuantity = (id: number) => {
  //   const updatedItems = cartItems.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedItems);
  // };

  // const handleDecreaseQuantity = (id: number) => {
  //   const updatedItems = cartItems.map((item) => {
  //     if (item.id === id && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedItems);
  // };


  // const handleClearCart = () => {
  //   setCartItems([]);
  // };

  useEffect(() => {
    // Сохранение состояния корзины в локальном хранилище
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleGoToBookPage = () => {
    setPage('bookPage');
  };
  return (
    <div className="cart-page">
        <button onClick={handleGoToBookPage}><img src={arrowLeft} alt="arrowLeft" /></button>
        <Typography content='Your cart' type={'H1'}/>
      
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              year={item.year}
              authors={item.authors}
              // quantity={item.quantity}
              removeFromCart={handleRemoveFromCart} 
              image={item.image} 
              // description={item.description}            // increaseQuantity={handleIncreaseQuantity}
              // decreaseQuantity={handleDecreaseQuantity}
            />
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