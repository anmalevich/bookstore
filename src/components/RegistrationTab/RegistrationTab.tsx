import { FC } from 'react';
import './RegistrationTab.scss';

interface IRegistrationTab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
}

export const RegistrationTab: FC<IRegistrationTab> = ({title, isActive = false, isDisabled = false}) => {

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'}`;

    return <li className={buttonClass}>{title}</li>
};
