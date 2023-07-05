import { FC, useState } from 'react';
import { Input } from '../Input/Input';

export const Form: FC = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');


    const handleChangeName = (newName: string) => {
        setName(newName);
    }

    const handleChangeLastName = (newName: string) => {
        setLastName(newName);
    }

    const handleChangeAge = (newName: string) => {
        setAge(newName);
    }


    return (
        <form>
            <Input
                title='Title'
                placeholder='some placeholder'
                value={name}
                handleChange={handleChangeName}
            />
            <Input
                title='Title2'
                placeholder='some placeholder'
                value={lastName}
                isDisabled
                handleChange={handleChangeLastName}
            />
            <Input
                title='Title'
                placeholder='some placeholder'
                value={age}
                errorMessage='Error text'
                handleChange={handleChangeAge}
            />
            
        </form>
    )
};