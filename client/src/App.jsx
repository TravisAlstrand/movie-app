import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { getAllSearch } from './ApiCalls';
// import UserContext from './Components/context/UserContext';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import MovieDetailPage from './Components/MovieDetailPage';


function App() {

  const [user, setUser] = useState(null);
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
    // <UserContext.Provider value={{ user }}>
    <>
      <Header user={user} />
      <SearchBar changeSearchQuery={setSearchQuery} resetPageNumber={setCurrentPage} />
      <Routes>
        <Route exact path='/' element={<Navigate replace to={`/search/${searchQuery}/${currentPage}`} />} />
        <Route path='/search/:searchQuery/:page' element={<SearchResults movies={movies} isLoading={isLoading} changePage={setCurrentPage} currentPage={currentPage} searchTerm={searchQuery} changeSearch={setSearchQuery} />} />
        <Route path='/details/:imdbID' element={<MovieDetailPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
    // {/* </UserContext.Provider> */ }
  );
};

export default App
