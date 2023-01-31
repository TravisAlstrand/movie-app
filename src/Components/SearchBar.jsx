import { useRef } from "react";

const SearchBar = ({ changeSearchQuery }) => {

  const searchBar = useRef('');

  function handleSearch(e) {
    e.preventDefault();
    const searchText = searchBar.current.value;
    changeSearchQuery(searchText);
    e.target.reset();
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