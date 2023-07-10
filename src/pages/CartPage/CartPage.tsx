import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { Product } from '../../components/mock/Product';

type CartPageProps = {
  cartItems: Product[];
  setCartItems: (items: Product[]) => void;
};

const CartPage = ({ cartItems, setCartItems }: CartPageProps) => {
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


  const handleClearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    // Сохранение состояния корзины в локальном хранилище
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
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
              // quantity={item.quantity}
              removeFromCart={handleRemoveFromCart} 
              image={item.image} 
              // description={item.description}            // increaseQuantity={handleIncreaseQuantity}
              // decreaseQuantity={handleDecreaseQuantity}
            />
          ))}
          <div className="totals">
            <p>Total Price: {totalPrice}$</p>
            <p>Total Price with VAT: {totalPrice + 12}$</p>
          </div>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;