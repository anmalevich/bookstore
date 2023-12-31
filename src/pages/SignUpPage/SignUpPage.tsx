import { FC, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './SignUpPage.scss';
import { RegistrationTab } from '../../components/RegistrationTab/RegistrationTab';
import { useNavigate } from 'react-router-dom';

export const SignUpPage: FC = () => {

    const [tabs, setTabs] = useState([
        {id: 1, title: 'SIGN IN', isActive: false, isDisabled: false},
        {id: 2, title: 'SIGN UP', isActive: true, isDisabled: false},
    ]);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd, setConfirmPassowrd] = useState('');

    const handleChangeName = (newValue: string) => {
        setName(newValue);
    }

    const handleChangeEmail = (newValue: string) => {
        setEmail(newValue);
    }

    const handleChangePassword = (newValue: string) => {
        setPassword(newValue);
    }

    const handleChangeConfirmPassword = (newValue: string) => {
        setConfirmPassowrd(newValue);
    }

    const handleSubmit = () => {
        console.log('форма отправляется на сервер');
    }

    const navigate = useNavigate();

    return (
        <div className='sign-up'>
            <form className='sign-up__form'>
                <ul className='tabs'>
                    {tabs.map(({id, title, isActive, }) => (
                            <RegistrationTab key={id} title={title} isActive={isActive}  />
                    ))}
                </ul>
                <Input
                    title='Name'
                    placeholder='Your name'
                    value={name}
                    handleChange={handleChangeName}
                />
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
                <Input
                    title='Confirm password'
                    placeholder='Confirm password'
                    value={confirmPassowrd}
                    handleChange={handleChangeConfirmPassword}
                />
                <Button content='Sign Up' onClick={() => navigate(`/sign-in`)} type='primary'/>
                
            </form>
        </div>
    )
};