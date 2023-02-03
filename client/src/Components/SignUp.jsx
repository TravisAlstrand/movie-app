import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const firstName = useRef('');
  const lastName = useRef('');
  const emailAddress = useRef('');
  const password = useRef('');
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const userBody = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      emailAddress: emailAddress.current.value,
      password: password.current.value
    };
    console.log(userBody);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" ref={firstName} type="text" />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" ref={lastName} type="text" />
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" ref={emailAddress} type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" ref={password} type="text" />
        <button type="submit">Sign Up</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </main>
  );
};

export default SignUp;