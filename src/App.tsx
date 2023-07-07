import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Button } from './components/Button/Button';
import { FavoriteButton } from './components/FavoriteButton/FavoriteButton';
import { Tabs } from './components/Tabs/Tabs';
import {Form} from './components/Form/Form' ;
import { Typography } from './components/Typography/Typography';
import { ActionsCard } from './components/ActionsCard/ActionsCard';
import { Rating } from './components/Rating/Rating';
import { SmallCard } from './components/SmallCard/SmallCard';
import { Subscription } from './components/Subscription/Subscription';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { PageTemplate } from './components/PageTemplate/PageTemplate';
import { SignUp } from './pages/SignUp/SignUp';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { MainPage } from './pages/MainPage/MainPage';
import { CardList } from './components/CardList/CardList';


export const App = () => {

    return (
      <div>
        <PageTemplate>
          <MainPage/>
        </PageTemplate>
{/*       
      <br />
      <Header/>
      <br/>
      <Button type='primary' content='Add to cart' isDisabled />
      <Button type='primary' content='Add to cart' />
      <br/>
      <Button type='delete' content= 'x' isDisabled />
      <Button type='delete' content='x' />
      <br/>
      <Typography content='Test' type='H1'/>
      <Typography content='Test' type='H2'/>
      <Typography content='Test' type='H3'/>
      <Typography content='Test' type='S1'/>
      <Typography content='Test' type='B'/>
      <Typography content='Test' type='B2'/>
      <br />
      <Tabs/>
      <br />
      <BurgerMenu/>
      <br />
      <FavoriteButton isDisabled={false} type={'favorite'}/>
      <br />
      <FavoriteButton isDisabled={true} type={'favorite'}/>
      <br />
      <br />
      <br />
      <Form/>
      <br />
      <ActionsCard/>
      <br />
      <Rating/>
      <br />
      <SmallCard isbn13={0} title={'Securing DevOps'} image={'https://itbook.store/img/books/9781617294136.png'} authors={'Julien Vehent'} year={2018} price={'$26.98'}/>
      <br />
      <Subscription/>
      <br />
      <Footer/> */}
    </div>
    )
   }