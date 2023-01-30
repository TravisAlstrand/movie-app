const apiKey = 'dc298d6';

export async function getAllSearch(searchText) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}&r=json&page=1`)
    .then(res => res.json());
  return response.Search;
}