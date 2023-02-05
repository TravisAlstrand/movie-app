import { Link } from "react-router-dom";

const Header = ({ user }) => {

  return (
    <header>
      {!user ? (
        <>
          <Link to='/signin'>
            <button>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
        </>
      ) : (
        <>
          <button>Watchlist</button>
          <button>Sign Out</button>
        </>
      )}
    </header>
  );
};

export default Header;