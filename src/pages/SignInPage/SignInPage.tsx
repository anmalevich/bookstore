import { FC, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignInPage.scss';
import { RegistrationTab } from '../../components/RegistrationTab/RegistrationTab';
import { useNavigate } from 'react-router-dom';

export const SignInPage: FC = () => {

    const [tabs, setTabs] = useState([
        {id: 1, title: 'SIGN IN', isActive: true, isDisabled: false, },
        {id: 2, title: 'SIGN UP', isActive: false, isDisabled: false },
    ]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    const handleSubmit = () => {
        console.log('форма отправляется на сервер');
    }

    const navigate = useNavigate();

    return (
        <div className='sign-in'>
            <form className='sign-in__form'>
                <ul className='tabs'>
                    {tabs.map(({id, title, isActive}) => (
                            <RegistrationTab key={id} title={title} isActive={isActive}  />
                    ))}
                </ul>
                <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleChangeEmail}
                />
                <Input
                    title='Password'
                    placeholder='Your password'
                    value={password}
                    handleChange={handleChangePassword}
                />
                <button className='forgot-password' onClick={() => navigate(`/reset-password`)}><span>Forgot password ?</span></button>
                
                <Button onClick={() => navigate(`/sign-in`)} content='Sign In'  type='primary'/>
            </form>
        </div>
    )
};