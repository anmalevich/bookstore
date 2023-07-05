import { FC,useState } from 'react';
import cancel from '../../icons/Cancel.svg';
import './CancelButton.scss';

interface ICancelButton {
    isDisabled: boolean;
    type: 'cancel' ;
}

export const CancelButton: FC<ICancelButton> = ({ isDisabled, type}) => {

    const [isOpen, setIsOpen] = useState(false); // let isOpen = false;

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    }
 
    const cancelButtonClass = `button button--${type} ${isDisabled ? 'disabled' : 'active'}`

    return (
        <button
          className={cancelButtonClass}
          onClick={handleClick}
          disabled={isDisabled}
        >
             {isDisabled ? (
                <img src={cancel} alt="cancel" />
            ) : (
                isOpen ? (
                    < img src={cancel} alt="cancel" />
            ) : (
                <img src={cancel} alt="cancel" />
            ))}
            
        </button>
    )
}
