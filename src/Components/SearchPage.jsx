import { Link } from "react-router-dom";

const SearchPage = () => {

  return (
    <main>
      <form>
        <input type='text' name='search' id='search' placeholder='Search for a movie...' />
        <button type="submit">Submit</button>
      </form>
      <Link to='/home'>
        <button className='btn'>Back Home</button>
      </Link>
    </main>
  );
};

export default SearchPage;