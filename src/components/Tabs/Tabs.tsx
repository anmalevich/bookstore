import { FC, useState } from 'react';
import './Tabs.scss';
import { Tab } from '../Tab/Tab';

export const Tabs: FC = () => {
    const [tabs, setTabs] = useState([
        {id: 1, title: 'Description', isActive: true, isDisabled: false},
        {id: 2, title: 'Authors', isActive: false, isDisabled: false},
        {id: 3, title: 'Reviews', isActive: false, isDisabled: true},
    ]);

    return (
        <ul className='tabs'>
            {tabs.map(({id, title, isActive, isDisabled}) => (
                    <Tab key={id} title={title} isActive={isActive} isDisabled={isDisabled} />
            ))}
        </ul>
    )
};