import React, { useEffect, useState } from 'react';
import { SmallCard } from '../../components/SmallCard/SmallCard';
import { Subscription } from '../../components/Subscription/Subscription';
import { Typography } from '../../components/Typography/Typography';
import {Pagination} from '../../components/Pagination/Pagination';
import { API_URL } from '../../API';
import axios from 'axios';
import { Spinner } from '../../components/Spinner/Spinner';
import './MainPage.scss';
import {  useNavigate } from 'react-router-dom';
import { Search } from '../../components/Search/Search';

interface Book {
  id: number;
  title: string;
  authors: string;
  image_url: string;
}

export const MainPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [booksPerPage] = useState(9);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Book[]>(API_URL);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, []);

  const pageCount = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastBook = (currentPage + 1) * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredBooks);
    }
  };

  return (
    <div className="main">
      <Typography content={'New releases books'} type={'H1'} />
      <div className="blog__tabs">
      <Search onSearch={handleSearch} />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SmallCard books={searchResults.length > 0 ? searchResults : currentBooks} onClick={() => navigate(`/books/${book.id}`)}/>
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          </>
        )}
        <Subscription />
      </div>
    </div>
  );
};