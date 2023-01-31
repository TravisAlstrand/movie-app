import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

const MoviesPage = ({ movies }) => {
  return (
    <main>
      {movies.map((movie, index) => {
        return (
          <Link to={`/movies/${movie.Title}`} key={index}>
            <MovieCard key={movie.imdbID} data={movie} />
          </Link>
        )
      })}
    </main>
  );
};

export default MoviesPage;