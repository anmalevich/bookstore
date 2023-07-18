import { FC, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';

import './PageTemplate.scss'

interface IPageTemplate {
    children?: ReactNode
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    return (
        <div className='all-page'>
            <div className='all-page__template'>
                <Header />
                <Container>
                    {children}
                </Container>
                <Footer/>
            </div>
            
        </div>
    )
};