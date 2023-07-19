import { FC, useState } from 'react';

import search from '../../icons/Search.svg';
import cancel from '../../icons/Cancel.svg';

import './Search.scss';

interface SearchProps {
    onSearch: (query: string) => void;
  }

export const Search: React.FC<SearchProps> = ({ onSearch })  => {

    const [openSearch, setOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

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
                <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className='search__input'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                </form>
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