import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { getAllSearch } from './ApiCalls';
import SearchBar from './Components/SearchBar';
import MoviesPage from './Components/MoviesPage';
import MovieDetailPage from './Components/MovieDetailPage';


function App() {

  const [searchQuery, setSearchQuery] = useState('batman');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  async function fetchData() {
    const results = await getAllSearch(searchQuery);
    setMovies(results);
  };

  return (
    <>
      <SearchBar changeSearchQuery={setSearchQuery} />
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/movies' />} />
        <Route path='/movies' element={<MoviesPage movies={movies} />} />
        <Route path='/movies/:title' element={<MovieDetailPage />} />
      </Routes>
    </>
  );
};

export default App
