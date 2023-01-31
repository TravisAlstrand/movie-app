import MovieCard from "./MovieCard";

const MoviesPage = ({ movies }) => {
  return (
    <main>
      {movies.map(movie => {
        return <MovieCard key={movie.imdbID} data={movie} />
      })}
    </main>
  );
};

export default MoviesPage;