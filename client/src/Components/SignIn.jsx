import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { userSignIn } from '../ApiCalls';

const SignIn = () => {

  const emailAddress = useRef('');
  const password = useRef('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailAddress.current.value;
    const pass = password.current.value;

    userSignIn(email, pass);
  };

  return (
    <main>
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