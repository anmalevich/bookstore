import { FC, } from 'react';

import './Button.scss';

interface IButton {
    isDisabled: boolean;
    type: 'primary' | 'delete' ;
    content: string;
    onClick: () => void;
}

export const Button: FC<IButton> = ({content, isDisabled, onClick, type}) => {

 
    const buttonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'}`

    return (
        <button
          className={buttonClass}
          onClick={onClick}
          disabled={isDisabled}
        >
            {content}
            
        </button>
    )
}