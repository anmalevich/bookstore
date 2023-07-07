import { FC } from 'react';
import filledStar from '../../icons/FilledStar.svg';
import emptyStar from '../../icons/EmptyStar.svg';

import './Rating.scss';

interface IRating {
}

export const Rating: FC<IRating> = () => {
    return (
        <div className='rating'>
            <img src={filledStar} alt="1 point" />
            <img src={filledStar} alt="1 point" />
            <img src={filledStar} alt="1 point" />
            <img src={filledStar} alt="1 point" />
            <img src={emptyStar} alt="0 point" />
        </div>
    )
};
