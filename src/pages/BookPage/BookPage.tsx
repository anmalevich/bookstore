import { FC } from 'react';
import { ActionsCard } from '../../components/ActionsCard/ActionsCard';
import { Button } from '../../components/Button/Button';
import { FavoriteButton } from '../../components/FavoriteButton/FavoriteButton';
import { Rating } from '../../components/Rating/Rating';
import { Slider } from '../../components/Slider/Slider';
import { Subscription } from '../../components/Subscription/Subscription';
import { Tabs } from '../../components/Tabs/Tabs';
import { Typography } from '../../components/Typography/Typography';

import arrowLeft from '../../icons/arrowLeft.svg'
import arrowRight from '../../icons/arrowRight.svg'
import './BookPage.scss';

interface IBookPage {
    price: string;
    authors: string;
}

export const BookPage: FC<IBookPage> = ({price, authors}) => {
    return (
        <>
            {/* Arrow */}
            <Typography content={'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition'} type={'H1'}/>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <FavoriteButton isDisabled={false} type={'favorite'}/>
                    </div>
                    <div>
                        <div>
                            {price}
                            <Rating/>
                        </div>
                        <div>
                            <p>Authors</p>
                            <p>{authors}</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>

                        <Button type={'primary'} content={'Add to cart'}/>
                        <p>Preview book</p>
                    </div>
                </div>
                <Tabs/>
                <p></p>
                <p></p>
                <p></p>
                <ActionsCard/>
            </div>
            <Subscription/>
            <div>
                <div>
                    <Typography content={'Similar books'} type={'H2'}/>
                    <div>
                        <button><img src={arrowLeft} alt="arrowLeft" /></button>
                        <button><img src={arrowRight} alt="arrowRight" /></button>
                    </div>
                </div>
                <Slider/>
            </div>
       
       </>
    )
};
