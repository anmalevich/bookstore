import { FC, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './ResetPasswordPage.scss';

export const ResetPasswordPage: FC = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange  = (newEmail: string) => {
        setEmail(newEmail);
    }

    const handleSubmit = () => {
        setIsSubmitted(true);
      };

    return (
        <div className='sign-in'>
            <form className='sign-in__form'>
                <Typography content={'Reset password'} type={'H3'}/>
                {!isSubmitted ? (
                <div className='sign-in__form-info'>
                    <Input
                    title='Email'
                    placeholder='Your email'
                    value={email}
                    handleChange={handleEmailChange}
                />
                <Button content='Reset' onClick={handleSubmit} type='primary'/>
                </div>
                ) : (
                    <div className='sign-in__form-info'>
                        <div className='sign-in__form-attention'>
                            <p>You will receive an email <span>{email}</span> with a link to reset your password!</p>
                        </div>
                        <Input
                            title='Email'
                            placeholder='Your email'
                            value={email}
                            handleChange={handleEmailChange}
                        />
                        <Button content='Go to home' onClick={handleSubmit} type='primary'/>
                    </div>
                )}
                
            </form>
        </div>
    )
};