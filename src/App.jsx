import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { getAllSearch } from './ApiCalls';
import SearchBar from './Components/SearchBar';
import MoviesPage from './Components/MoviesPage';


function App() {

  const [searchQuery, setSearchQuery] = useState('batman');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  async function fetchData() {
    const results = await getAllSearch(searchQuery);
    console.log(`returned results in App.jsx: ${results}`);
    setMovies(results);
  };

  return (
    <>
      <SearchBar changeSearchQuery={setSearchQuery} />
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<MoviesPage movies={movies} />} />
      </Routes>
    </>
  );
};

export default App
