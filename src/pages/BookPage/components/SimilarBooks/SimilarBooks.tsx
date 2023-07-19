import { FC, useState } from 'react';


import arrowLeft from '../../icons/arrowLeft.svg'
import { Typography } from '../../../../components/Typography/Typography';
import { SliderCards } from '../../../../components/SliderCards/SliderCards';
import arrowRight from '../../icons/arrowRight.svg'

import './SimilarBooks.scss';




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
            <SliderCards />
            </div>
      </div>
      
    </div>
  );
};