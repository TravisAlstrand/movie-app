import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';

function App() {

  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery])

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/search' element={<SearchPage setSearchQuery={setSearchQuery} />} />
      </Routes>
    </>
  );
};

export default App
