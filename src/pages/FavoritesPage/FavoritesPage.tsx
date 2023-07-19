import { useNavigate} from 'react-router-dom';
import ReactStars from 'react-stars';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../components/context/appContext';
import { Typography } from '../../components/Typography/Typography';
import redFavorite from '../../icons/FilledFavorites.svg';
import arrowLeft from '../../icons/bigArrowLeft.svg'

import './FavoritesPage.scss';
import { PopularBooks } from '../../components/PopularBooks/PopularBooks';



export const FavoritesPage = () => {
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log('Favorites are', favorites);

    const favoritesChecker = (id: number): boolean => {
        const boolean = favorites.some((book) => book.id ===id);
        return boolean;
    }
    
    const navigate = useNavigate();

      

      return (
        <>
        <button className='arrow-left' onClick={() => navigate(`/new-releases`)}><img src={arrowLeft} alt="arrowLeft" /></button>
           < Typography content={'Favorites'} type={'H1'} />
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div className='fav-page' key={book?.id}>
                
                <div className="favoritesItem" key={book?.id}>
                  <div className='favoritesItem__main' >
                    <div className='favoritesItem__image'>
                      <img src={book?.image_url} alt="book" />
                    </div>
                    <div className='favoritesItem__info'>
                      <Typography content={book?.title} type={'H3'} />
                      <p className='favoritesItem__info__description'>by {book?.authors}, 2018</p>
                      <div className='favoritesItem__rating'>
                        <p className='favoritesItem__price'>$21</p>
                        <ReactStars
                                count={5}
                                value = {book?.rating}
                                size={24}
                                color1={'#cccccc'}
                                color2={'#FEBE00'}
                                edit={false}
                            />
                      </div>
                    </div>
                  </div>
                  {favoritesChecker(book.id) ? (
                    <button className='red-favorite'><img src={redFavorite} alt="RedFavorite" onClick={() => removeFromFavorites(book.id)}/></button>
                  ) : (
                    <Button onClick={() => addToFavorites(book)} type={'primary'} content={'Add to Favorites'} />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>
            <Typography content={"You don't have any favorite books yet!"} type={'H3'} />
            </div>
          )}
          <PopularBooks/>
        </>
      );
    }