import { FC, useState } from 'react';

import search from '../../icons/Search.svg';
import cancel from '../../icons/Cancel.svg';

import './Search.scss';

export const Search: FC = () => {

    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleToggleClick = () => {
        if (openSearch) {
            setSearchValue('');
        }
        setOpenSearch(!openSearch);
      };

      const handleChangeSearch = (newValue: string) => {
        setSearchValue(newValue);
      }

      return (
        <div className='search'>
            <div className='search__input'>
                <input
                    type="text"
                    className='search__input'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => handleChangeSearch(e.target.value)} 
                />
            </div>
          
            <div className='search__box'>
                <div className='search__box-icons'>
                    <button onClick={handleToggleClick}>
                        {openSearch ? (
                            <img src={cancel} alt="cancel" />
                        ) : ( 
                            <img src={search} alt="search" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
};