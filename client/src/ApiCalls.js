import { Buffer } from 'buffer';

const apiKey = 'dc298d6';
const dbUrl = 'http://localhost:5000/api';

function api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
  const url = dbUrl + path;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-'
    }
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  };

  if (requiresAuth) {
    const encryptedCredentials = Buffer.from(`${credentials.emailAddress}:${credentials.password}`).toString('base64');
    options.headers['Authorization'] = `Basic ${encryptedCredentials}`;
  };

  const results = fetch(url, options);

  return (results);
}

export async function getAllSearch(searchText, page) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}&r=json&page=${page}`)
    .then(res => res.json());
  return response.Search;
}

export async function getSingleMovie(id) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full&r=json`)
    .then(res => res.json());
  return response;
}

export async function userSignIn(emailAddress, password) {
  const response = await api('/users', 'GET', null, true, { emailAddress, password });

  if (response.status === 200) {
    return response.json();
  }
}