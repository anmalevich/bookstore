import { FC } from 'react';
import facebook from '../../icons/facebook.svg';
import twitter from '../../icons/twitter.svg';
import more from '../../icons/more-horizontal.svg';
import './ActionsCard.scss';
// import { MenuCard } from '../MenuCard/MenuCard';

export const ActionsCard: FC = () => {
    return (
        <div className='actions-card'>
            <div className='actions-card__box'>
                <img src={facebook} alt="facebook" />
            </div>
            <div className='actions-card__box'>
                <img src={twitter} alt="twitter" />
            </div>
            <div className='actions-card__box'>
                <img src={more} alt="more" />
            </div>
        </div>
    )
};