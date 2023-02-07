// import { createContext, useState } from "react";
// import { Buffer } from "buffer";

// const dbUrl = 'http://localhost:5000/api';
// export const UserContext = createContext(null);

// const Provider = (props) => {
//   const [user, setUser] = useState(null);

//   function api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
//     const url = dbUrl + path;

//     const options = {
//       method,
//       headers: {
//         'Content-Type': 'application/json; charset=utf-'
//       }
//     };

//     if (body !== null) {
//       options.body = JSON.stringify(body);
//     };

//     if (requiresAuth) {
//       const encryptedCredentials = Buffer.from(`${credentials.emailAddress}:${credentials.password}`).toString('base64');
//       options.headers['Authorization'] = `Basic ${encryptedCredentials}`;
//     };

//     const results = fetch(url, options);

//     return (results);
//   }

//   async function userSignIn(emailAddress, password) {
//     const response = await api('/users', 'GET', null, true, { emailAddress, password });

//     if (response.status === 200) {
//       console.log(response.json());
//     }
//   }

//   return (
//     <UserContext.Provider value={{
//       user,
//       actions: {
//         signIn: userSignIn
//       }
//     }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }

// export default Provider;