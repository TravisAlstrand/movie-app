import { Link } from "react-router-dom";

const Header = ({ user }) => {

  return (
    <header>
      {!user ? (
        <div className="header-div">
          <Link to='/signin'>
            <button className="btn">Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      ) : (
        <div>
          <button>Watchlist</button>
          <button>Sign Out</button>
        </div>
      )}
    </header>
  );
};

export default Header;