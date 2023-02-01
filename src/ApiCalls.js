const apiKey = 'dc298d6';

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