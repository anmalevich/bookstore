import { FC, useEffect, useState } from 'react';

import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './BookPage.scss';
import { SimilarBooks } from '../../components/SimilarBooks/SimilarBooks';
import { BookCard } from '../../components/BookCard/BookCard';
import { Product } from '../../components/mock/Product';
import CartPage from '../CartPage/CartPage';
import { ICard } from '../../interfaces/ICard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



export const BookPage = () => {
  const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  // const [post, setPost] = useState<null | ICard>(null);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //       if (id) {
  //           getPost({ id }).then((data) => {
  //               setPost(data);
  //               setIsLoading(false);
  //           })
  //       }
  //   }, [id]);
    
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setPage('cart');
  };

  const handleGoToBookPage = () => {
    setPage('bookPage');
  };

  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/books/${id}`)
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
                <a href="#" className="bookCard-page__arrow"><img src={arrowLeft} alt="arrowLeft" onClick={() => navigate(`/`)} /></a>
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
 