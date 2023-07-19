import { FC } from 'react';
import './RegistrationTab.scss';

interface IRegistrationTab {
    title: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
}

export const RegistrationTab: FC<IRegistrationTab> = ({title, isActive = false, isDisabled = false, onClick}) => {

    const buttonClass = `tab ${isDisabled && 'disabled'} ${isActive && 'active'}`;

    return <li className={buttonClass}>{title}</li>
};
