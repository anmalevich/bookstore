import { FC } from 'react';

import { Typography } from '../Typography/Typography';

import './CartItem.scss';

interface ICartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
  authors: string;
  year: number;
  removeFromCart: (id: number) => void;
// increaseQuantity: (id: number) => void;
//   // decreaseQuantity: (id: number) => void;

}


export const CartItem: FC<ICartItem> = ({ id, image, title, description, price, removeFromCart, authors, year}) => {
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  // const handleIncreaseQuantity = () => {
  //   increaseQuantity(id);
  // };

  // const handleDecreaseQuantity = () => {
  //   decreaseQuantity(id);
  // };

  return (
    <div className="cartItem">
        <div className='cartItem__main'>
            <div className='cartItem__image'>
                <img src={image} alt="" />
            </div>
            <div className='cartItem__info'>
                <Typography content={title} type={'H3'}/>
                <p>by {authors}, {year}</p>
                {/* <Typography content={description} type={'B2'}/> */}
                {/* <div>
                  <button onClick={handleDecreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncreaseQuantity}>+</button>
                </div> */}
            </div>
        </div>
        <p className='cartItem__price'>${price}</p>
        <button className='cartItem__close' onClick={handleRemoveFromCart}>X</button>
        
    </div>
  );
};

export default CartItem;