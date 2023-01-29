import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <main className='home-container'>
      <h1 className='home-h1'>Awesome Movie App</h1>
      <Link to='/search'>
        <button className='btn'>Quick Search</button>
      </Link>
      <Link to='/signin'>
        <button className='btn'>Sign In</button>
      </Link>
      <Link to='/signup'>
        <button className='btn'>Sign Up</button>
      </Link>
    </main>
  );
};

export default HomePage;