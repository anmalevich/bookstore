import { FC } from 'react';
import { ICard } from '../../interfaces/ICard';
import { SmallCard } from '../SmallCard/SmallCard';

import './CardList.scss';

interface ICardList {
    cards: ICard[];
}

export const CardList: FC<ICardList> = ({cards}) => {
    return (
        <div className='main__box-cards'>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
                <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/> 
            </div>
    )
};