import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App
