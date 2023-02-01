import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../ApiCalls";

const MovieDetailPage = () => {

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { imdbID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleData();
  }, [imdbID])

  async function fetchSingleData() {
    const results = await getSingleMovie(imdbID);
    setMovie(results);
    setIsLoading(false);
  };

  return (
    (isLoading)
      ? <h2>Loading...</h2>
      : (
        <main>
          <h1>{movie?.Title}</h1>
          <p>Starring: {movie.Actors}</p>
          <p>Directed By: {movie.Director}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Released: {movie.Released}</p>
          <img src={movie.Poster} alt={`movie poster for ${movie.Title}`} />
        </main>
      )
  );
};

export default MovieDetailPage;