import { useEffect, useState } from 'react';

import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';
import arrowLeft from '../../icons/bigArrowLeft.svg'
import { BOOK_CARD_URL } from '../../API';
import { SimilarBooks } from './components/SimilarBooks/SimilarBooks';
import { BookCard } from './components/BookCard/BookCard';
import CartPage from '../CartPage/CartPage';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import './BookPage.scss';

export const BookPage = () => {
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BOOK_CARD_URL}/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

    return (
       <div className="bookCard-page">
        
        {page === 'bookPage' ? (
            <>
                <button className='arrow-left' onClick={() => navigate(`/new-releases`)}><img src={arrowLeft} alt="arrowLeft" /></button>
                <Typography content={book.title} type={'H1'}/>
                <BookCard />
                <Subscription/>
                <SimilarBooks/>
            </>       
          ) : (
          <div className='cartPage'>
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        )}
      </div>
         )
        }
        