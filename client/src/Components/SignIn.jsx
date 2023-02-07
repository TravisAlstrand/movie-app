import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from './context/UserContext';

const SignIn = () => {

  // const { actions } = useContext(UserContext);
  // const navigate = useNavigate();

  const emailAddress = useRef('');
  const password = useRef('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailAddress.current.value;
    const pass = password.current.value;

    console.log(`email: ${email} \n pass: ${pass}`)

    // actions.signIn(email, pass)
    //   .then(response => {
    //     if (response !== null) {
    //       navigate('/');
    //     } else {
    //       setError('Please try your credentials again');
    //     };
    //   });
  };

  return (
    <main>
      {error !== '' ? (
        <p>{error}</p>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" ref={emailAddress} type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" ref={password} type="password" />
        <button type="submit">Sign In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </main>
  );
};

export default SignIn;