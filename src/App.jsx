import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { getAllSearch } from './ApiCalls';
import HomePage from './Components/HomePage';
// import SearchPage from './Components/SearchPage';

function App() {

  const [searchQuery, setSearchQuery] = useState('batman');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      fetchData();
    };
    console.log(movies)
  }, [searchQuery]);

  const fetchData = async () => {
    const results = await getAllSearch(searchQuery);
    setMovies(results);
  };

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App
