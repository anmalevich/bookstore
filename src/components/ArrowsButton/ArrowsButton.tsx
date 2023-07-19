import { FC,useState } from 'react';

import arrowLeft from '../../icons/arrowLeft.svg'
import arrowRight from '../../icons/arrowRight.svg'

import './ArrowsButton.scss';

export const ArrowsButton: FC = () => {
    const [activeButton, setActiveButton] = useState('');
    
    const handleButtonClick = (buttonName : string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='arrows'>
            <button className={`button ${activeButton === 'button1' ? 'active' : ''}`}
                    onClick={ () => handleButtonClick('button1')}><img src={arrowLeft} alt="arrowLeft" /></button>
            <button className={`button ${activeButton === 'button2' ? 'active' : ''}`}
                    onClick={ () => handleButtonClick('button2')}><img src={arrowRight} alt="arrowRight" /></button>
        </div>
    )
};

