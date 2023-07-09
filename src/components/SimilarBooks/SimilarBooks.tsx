import { FC, useState } from 'react';

import { SmallCard } from '../SmallCard/SmallCard';

import arrowLeft from '../../icons/arrowLeft.svg'
import arrowRight from '../../icons/arrowRight.svg'

import './SimilarBooks.scss';
import { Typography } from '../Typography/Typography';



export const SimilarBooks: FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
      
    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
    };
      
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    };

    return (

    <div className="slider">
        <div className='slider__head'>
            <Typography content={'Similar Books'} type={'H2'}/>
            <div className="controls">
                <button onClick={handlePrevSlide}><img src={arrowLeft} alt="arrowLeft" /></button>
                <button onClick={handleNextSlide}><img src={arrowRight} alt="arrowRight" /></button>
            </div>
        </div>
       
      <div className="cards">
            <div
            className={`card ${currentIndex === 0 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            <div
            className={`card ${currentIndex === 1 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            <div
            className={`card ${currentIndex === 2 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            <div
            className={`card ${currentIndex === 3 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            <div
            className={`card ${currentIndex === 4 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            <div
            className={`card ${currentIndex === 5 ? 'active' : ''}`}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
            >
            <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
            </div>
            
      </div>
      
    </div>
  );
};