import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Button } from './components/Button/Button';
import { FavoriteButton } from './components/FavoriteButton/FavoriteButton';
import { Tabs } from './components/Tabs/Tabs';
import {Form} from './components/Form/Form' ;
import { Typography } from './components/Typography/Typography';


export const App = () => {

  const handleClick1 = () => {
    console.log('click1');
  }

  const handleClick2 = () => {
    console.log('click2');
  }

  const handleClick3 = () => {
    console.log('click3');
  }

  const handleClick4 = () => {
    console.log('click4');
  }

  const handleClick5 = () => {
    console.log('click5');
  }

  const handleClick6 = () => {
    console.log('click6');
  }

    return (
      <div>
      <br/>
      <Button type='primary' content='Add to cart' isDisabled onClick={handleClick1}/>
      <Button type='primary' content='Add to cart' isDisabled={false} onClick={handleClick2}/>
      <br/>
      <Button type='delete' content= 'X' isDisabled onClick={handleClick3}/>
      <Button type='delete' content='X' isDisabled={false} onClick={handleClick4}/>
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
    </div>
    )
   }