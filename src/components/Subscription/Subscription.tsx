import { FC } from 'react';
import { Typography } from '../Typography/Typography';
import './Subscription.scss';

interface ISubscription {
    
}

export const Subscription: FC<ISubscription> = () => {

    // const [activeButton, setActiveButton] = useState('');

    // const handleButtonClick = (buttonName : string) => {
    //     setActiveButton(buttonName);
    // };
    

    return (
        <div className='subscription'>
            <div className='subscription__content'>
                <div className='subscription__info'>
                    <Typography content={'Subscribe to newsletter'} type={'H2'}/>
                    <Typography content={'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'} type={'S1'} />
                </div>    
                <div className='subscription__form'>  
                        <input className='subscription__form-input' type="email" placeholder='Your email' />
                        <button  className='subscription__form-btn' type='submit'>Subscribe</button>
                </div> 
                
            </div>
        </div>
    )
};
