import { FC } from 'react';
import './Typography.scss';

interface ITypography {
    content: string | number;
    type: 'H1' | 'H2' | 'H3' | 'S1' | 'B' | 'B2';
    isLink?: boolean; 
    onClick?: () => void;
}

export const Typography: FC<ITypography> = ({content, type, isLink = false, onClick}) => {

    const typographyMap = {
        H1: <h1 className={type}>{content}</h1>,
        H2: <h2 className={type}>{content}</h2>,
        H3: <h3 className={type}>{content}</h3>,
        S1: <h4 className={type}>{content}</h4>,
        B: <p className={type}>{content}</p>,
        B2: <p className={type}>{content}</p>,
    }

    return (
        <>
            {isLink ? (
                <a className='link' href="https://google.com">
                    {typographyMap[type]}
                </a>
            ) : (
                <>
                    {typographyMap[type]}
                </>
            )}
        </>
    )
};