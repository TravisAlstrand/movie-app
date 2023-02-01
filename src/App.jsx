import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import './App.css'

import { getAllSearch } from './ApiCalls';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import MovieDetailPage from './Components/MovieDetailPage';


function App() {

  const { page } = useParams();

  const [searchQuery, setSearchQuery] = useState('batman');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [searchQuery, currentPage]);

  async function fetchData() {
    const results = await getAllSearch(searchQuery, currentPage);
    setMovies(results);
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar changeSearchQuery={setSearchQuery} resetPageNumber={setCurrentPage} />
      <Routes>
        <Route exact path='/' element={<Navigate replace to={`/search/${searchQuery}/${currentPage}`} />} />
        <Route path='/search/:searchQuery/:page' element={<SearchResults movies={movies} isLoading={isLoading} changePage={setCurrentPage} currentPage={currentPage} searchQuery={searchQuery} />} />
        <Route path='/details/:imdbID' element={<MovieDetailPage />} />
      </Routes>
    </>
  );
};

export default App
