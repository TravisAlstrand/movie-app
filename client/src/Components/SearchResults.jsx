import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import MovieCard from "./MovieCard";

const SearchResults = ({ movies, isLoading, changePage, currentPage, searchQuery }) => {

  const navigate = useNavigate();
  const { page } = useParams();

  function changeToPrevPage() {
    currentPage--;
    changePage(currentPage);
    navigate(`/search/${searchQuery}/${currentPage}`);
  }

  function changeToNextPage() {
    currentPage++;
    changePage(currentPage);
    navigate(`/search/${searchQuery}/${currentPage}`);
  }

  useEffect(() => {
    if (parseInt(page) !== currentPage) {
      changePage(page);
    }
  })

  return (
    <main>
      {
        (isLoading)
          ? <h2>Loading...</h2>
          : (!isLoading && movies)
            ? (
              movies.map((movie, index) => {
                return (
                  <Link to={`/details/${movie.imdbID}`} key={index}>
                    <MovieCard key={movie.imdbID} data={movie} />
                  </Link>
                );
              })
            )
            : <h2>No Results</h2>
      }
      <div>
        {
          (currentPage > 1)
            ? <button onClick={changeToPrevPage}>Prev</button>
            : <></>
        }
        {
          (currentPage < 100)
            ? <button onClick={changeToNextPage}>Next</button>
            : <></>
        }

      </div>
    </main>
  );
};

export default SearchResults;