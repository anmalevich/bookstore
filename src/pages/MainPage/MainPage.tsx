import { FC, useEffect, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';
import { ICard } from '../../interfaces/ICard';
import { getCards } from '../../api/getCards';

import './MainPage.scss';
import { Spinner } from '../../components/Spinner/Spinner';

interface IMainPage {
}

export const MainPage: FC<IMainPage> = () => {
    // const [cards, setCards] = useState<null | ICard[]>(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchCards = async () => {
    //         const data = await getCards();
    //         setCards(data);
    //         setIsLoading(false);
    //     }

    //     fetchCards();
    // }, []);

    return (
        <div className='main'>
            <Typography content={'New releases books'} type={'H1'}/>
            {/* {isLoading ? <Spinner /> : ( */}
                <div className='blog__tabs'>
                    <CardList/>
                    {/* Пагинация */}
                    <Subscription/>
                </div>
            {/* )} */}
        </div> 
    )
};
