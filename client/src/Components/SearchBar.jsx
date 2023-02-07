import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ changeSearchQuery, resetPageNumber }) => {

  const searchBar = useRef('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    const searchText = searchBar.current.value;
    resetPageNumber(1);
    changeSearchQuery(searchText);
    e.target.reset();
    navigate(`/search/${searchText}/1`);
  };

  return (
    <div className="search-div">
      <form onSubmit={handleSearch}>
        <input type="text" ref={searchBar} id="searchBar" className="search-input" />
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  );

};

export default SearchBar;