import { useRef } from "react";
import { Link } from "react-router-dom";

const SearchPage = ({ setSearchQuery }) => {

  const searchText = useRef(null);

  function handleSubmit(e) {
    const input = document.querySelector('#search');
    e.preventDefault();
    setSearchQuery(searchText.current.value)
    input.value = '';
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={searchText} name='query' id='search' placeholder='Search for a movie...' />
        <button type="submit">Submit</button>
      </form>
      <Link to='/home'>
        <button className='btn'>Back Home</button>
      </Link>
    </main>
  );
};

export default SearchPage;