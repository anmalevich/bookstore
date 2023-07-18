import { FC, useEffect, useState } from 'react';
import { isTemplateMiddle } from 'typescript';
import { FavoritesItem } from '../../components/FavoritesItem/FavoritesItem';
import { Product } from '../../components/mock/Product';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/bigArrowLeft.svg'

import './FavoritesPage.scss';

interface IFavoritesPage {
favItems: Product[];
setFavItems: (items: Product[]) => void;
}

export const FavoritesPage: FC<IFavoritesPage> = ({ favItems, setFavItems }) => {
    const [page, setPage] = useState<'bookPage' | 'cart'>('bookPage');

    const handleGoToBookPage = () => {
        setPage('bookPage');
      };
    
    const handleRemoveFromFav = (id: number) => {
        const updatedItems = favItems.filter((item) => item.id !== id);
        setFavItems(updatedItems);
      };

      useEffect(() => {
        // Сохранение состояния корзины в локальном хранилище
        localStorage.setItem('favItems', JSON.stringify(favItems));
      }, [favItems]);
    
    
    return (
        <div className='fav-page'>
            <button onClick={handleGoToBookPage}><img src={arrowLeft} alt="arrowLeft" /></button>
            <Typography content={'Favorites'} type={'H1'}/>

            {favItems.length === 0 ? (
                 <p>There is no your favorite books</p>
            ) : (
                <>
                    { favItems.map((item) => (
                    <FavoritesItem 
                    key={item.id}
                    id={item.id}
                    image={item.image} 
                    title={item.title} 
                    authors={item.authors} 
                    year={item.year} 
                    price={item.price}  
                    />    
                    ))}
                </>
            )}
        </div>
    )};
