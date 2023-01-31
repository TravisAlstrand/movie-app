import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ changeSearchQuery }) => {

  const searchBar = useRef('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const searchText = searchBar.current.value;
    changeSearchQuery(searchText);
    e.target.reset();
    navigate('/movies');
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" ref={searchBar} id="searchBar" />
        <button type="submit">Search</button>
      </form>
    </>
  );

};

export default SearchBar;