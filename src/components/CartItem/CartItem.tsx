import { FC } from 'react';

import { Typography } from '../Typography/Typography';

import './CartItem.scss';

interface ICartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
  removeFromCart: (id: number) => void;
// increaseQuantity: (id: number) => void;
//   // decreaseQuantity: (id: number) => void;

}


export const CartItem: FC<ICartItem> = ({ id, image, title, description, price, removeFromCart}) => {
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
          {/* <Typography content={description} type={'B2'}/> */}
          {/* <div>
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div> */}
        </div>
      </div>
      <Typography content={price} type={'H2'}/>
      <button className='cartItem__close' onClick={handleRemoveFromCart}>X</button>
      
    </div>
  );
};

export default CartItem;