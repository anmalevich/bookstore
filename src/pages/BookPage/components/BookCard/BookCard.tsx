import { useEffect, useState} from 'react';

import { Button } from '../../../../components/Button/Button';
import chevronDown from '../../icons/chevron-down.svg'
import { MoreDetailse } from '../../../../components/MoreDetailse/MoreDetailse';
import { useParams} from 'react-router-dom';
import { BOOK_CARD_URL } from '../../../../API';
import { useAppContext } from '../../../../components/context/appContext';
import ReactStars from 'react-stars';
import redFavorite from '../../icons/FilledFavorites.svg';
import emptyFavorite from '../../icons/Favorites.svg';

import axios from 'axios';
import './BookCard.scss';


export const BookCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [book,setBook] = useState({});
    const { id } = useParams();
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();
    const {cart, addToCart, removeFromCart} = useAppContext();

    console.log('Favorites are', favorites);

    const favoritesChecker = (id: number): boolean => {
        const boolean = favorites.some((book) => book.id ===id);
        return boolean;
    }

    const cartChecker = (id: number): boolean => {
        const boolean = cart.some((book) => book.id ===id);
        return boolean;
    }
    
    useEffect(() => {
        axios
            .get(`${BOOK_CARD_URL}/${id}`)
            .then (res => {
            console.log(res.data)
            setBook(res.data)
            
        }).catch(err => console.log(err))
    }, [id])

    const handleClick = () => {
        setIsOpen(!isOpen);
      };

      return(
       <div>
            
             
            {!isOpen ? (
                
                    <div>
                    <div className='bookCard' key={book?.id}>
                        <div className='bookCard__image'>
                            <img src={book?.image_url} alt="book" />
                        
                        </div>
                        <div className='bookCard__info'>
                            <div className='bookCard__info-bold'>
                                <p>$21</p>
                                <ReactStars
                                count={5}
                                value = {book?.rating}
                                size={24}
                                color1={'#cccccc'}
                                color2={'#FEBE00'}
                                edit={false}
                            />
                            </div>
                            <div className='bookCard__info-primary'>
                                <div className='bookCard__info-primary__main'>
                                    <p>Authors</p>
                                    <p>Pages</p>
                                    <p>Language</p>
                                    <p>Format</p>
                                </div>
                                <div className='bookCard__info-primary__bold'>
                                    <p>{book?.authors}</p>
                                    <p>{book?.num_pages}</p>
                                    <p>English</p>
                                    <p>{book?.format}</p>
                                </div>  
                            </div>
                            <div className='bookCard__btns'>
                                <button className='bookCard__drop-down' onClick={handleClick}>
                                    <p>More detalise</p> 
                                    <img src={chevronDown} alt="chevron" />
                                </button>
                                <div className='bookCard__favorites'>
                                {favoritesChecker(book.id) ?
                                <button className='red-favorite'><img src={redFavorite} alt="RedFavorite" onClick={() => removeFromFavorites(book.id)}/></button>
                                : 
                                <button className='white-favorite'><img src={emptyFavorite} alt="RedFavorite"onClick= {()=>{addToFavorites(book)}}/></button>
                                } 
                                </div>
                            </div>
                            
                            <div className='bookCard__button'>
                                
                                {cartChecker(book.id) ?
                                <Button onClick= {()=>{removeFromCart(book.id)}} type={'primary'} content={'Remove from Cart'}/>
                                : 
                                <Button onClick= {()=>{addToCart(book)}} type={'primary'} content={'Add to Cart'}/>
                                } 
                        </div>
                        
                        </div>
                    </div>
                    </div>
                
        
            ) : (
                <div>
                    <div className='bookCard'>
                    <div className='bookCard__image'>
                        <img src={book?.image_url} alt="book" />
                    </div>
                    <div className='bookCard__info'>
                        <div className='bookCard__info-bold'>
                            $21
                            <ReactStars
                                count={5}
                                value = {book?.rating}
                                size={24}
                                color1={'#cccccc'}
                                color2={'#FEBE00'}
                                edit={false}
                            />
                        </div>
                        <div className='bookCard__info-primary'>
                            <div className='bookCard__info-primary__main'>
                                <p>Authors</p>
                                <p>Publisher</p>
                                <p>Language</p>
                                <p>Format</p>
                            </div>
                            <div className='bookCard__info-primary__bold'>
                                <p>{book?.authors}</p>
                                <p>{book?.num_pages}</p>
                                <p>English</p>
                                <p>{book?.format}</p>
                            </div>  
                        </div>
                        <div className='bookCard__btns'>
                        <button className='bookCard__drop-down' onClick={handleClick}>
                            <p>More detalise</p> 
                            <img src={chevronDown} alt="chevron" />
                        </button>
                                <div className='bookCard__favorites'>
                                {favoritesChecker(book.id) ?
                                <button className='red-favorite'><img src={redFavorite} alt="RedFavorite" onClick={() => removeFromFavorites(book.id)}/></button>
                                : 
                                <button className='white-favorite'><img src={emptyFavorite} alt="RedFavorite"onClick= {()=>{addToFavorites(book)}}/></button>
                                } 
                                </div>
                            </div>
                        
                        <div className='bookCard__button'>
                        {cartChecker(book.id) ?
                                <Button onClick= {()=>{removeFromCart(book.id)}} type={'primary'} content={'Remove from Cart'}/>
                                : 
                                <Button onClick= {()=>{addToCart(book)}} type={'primary'} content={'Add to Cart'}/>
                                }
                        </div>
                    </div>
            </div>
                    <MoreDetailse/>
                </div>
            )}
        
        </div>
        
      )}