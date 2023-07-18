import { useEffect, useState} from 'react';

import { Button } from '../Button/Button';

import { Rating } from '../Rating/Rating';


import chevronDown from '../../icons/chevron-down.svg'
import './BookCard.scss';
import { MoreDetailse } from '../MoreDetailse/MoreDetailse';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { API_URL, BOOK_CARD_URL } from '../../API';


type FavoriteBook = {
    id: number;
    title: string;
    authors: string;
    rating?: number;
    image_url: string;
  }

export const BookCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [book,setBook] = useState({});
    const { id } = useParams();
    const [favoriteBooks, setFavoriteBooks] = useState<FavoriteBook[]>([]);
    
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


      
    //   const handleAddToCart = () => {
        
    //     addToCart(book);
    //   };

      const navigate = useNavigate();

      const addToFavorites = () => {
        setFavoriteBooks(prevBooks => [...prevBooks, book])
        navigate('/favorites', {state: {book}});
      }

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
                                    <p>{book?.authors}</p>
                                    <p>Apress, 2018</p>
                                    <p>English</p>
                                    <p>English Paper book / ebook (PDF)</p>
                                </div>  
                            </div>
                            <button className='bookCard__drop-down' onClick={handleClick}>
                                <p>More detalise</p> 
                                <img src={chevronDown} alt="chevron" />
                            </button>
                            <div className='bookCard__button'>
                                <Button onClick={() => navigate(`/book_favs/`)} type={'primary'} content={'Add to cart'}/>
                                <Button onClick={addToFavorites} type={'primary'} content={'Add to Favorites'}/>
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
                                <p>{book?.authors}</p>
                                <p>Apress, 2018</p>
                                <p>English</p>
                                <p>English Paper book / ebook (PDF)</p>
                            </div>  
                        </div>
                        <button className='bookCard__drop-down' onClick={handleClick}>
                            <p>More detalise</p> 
                            <img src={chevronDown} alt="chevron" />
                        </button>
                        <div className='bookCard__button'>
                            <Button  type={'primary'} content={'Add to cart'}/>
                            <Button onClick={addToFavorites} type={'primary'} content={'Add to Favorites'}/>
                        </div>
                    </div>
            </div>
                    <MoreDetailse/>
                </div>
            )}
        
        </div>
        
      )}