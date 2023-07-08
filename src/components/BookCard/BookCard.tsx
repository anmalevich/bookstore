import { FC } from 'react';
import './BookCard.scss';

interface IBookCard {
}

export const BookCard: FC<IBookCard> = () => {
    return (
        <div>
            <div className='bookCard'>
                <div className='bookCard__info'>

                    <div className='bookCard__info-image'>
                        <img src={image} alt="book" />
                        <FavoriteButton isDisabled={false} type={'favorite'}/>
                    </div>

                    <div className='bookCard__info-about'>

                        <div className='bookCard__info-bold'>
                            {price}
                            <Rating/>
                        </div>

                        <div className='bookCard__info-primary'>
                            <p>Authors</p>
                            <p>{authors}</p>
                            <p>Publisher</p>
                            <p>Apress, {year}</p>
                            <p>Language</p>
                            <p>English</p>
                            <p>Format</p>
                            <p>English Paper book / ebook (PDF)</p>
                        </div>

                        <button>
                            <p>More detalise</p> 
                            <img src={chevronDown} alt="chevron" />
                        </button>
                        
                        <div className='bookCard__info-buttons'>
                            <Button type={'primary'} content={'Add to cart'}/>
                            <p>Preview book</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
