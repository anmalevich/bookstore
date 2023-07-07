import { FC } from 'react';

import { SmallCard } from '../SmallCard/SmallCard';

import './Slider.scss';

export const Slider: FC = () => {
    return (
        <>
           <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
           <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
           <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
        </>
    )
};
