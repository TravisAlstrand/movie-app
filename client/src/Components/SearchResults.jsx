import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import MovieCard from "./MovieCard";

const SearchResults = ({ movies, isLoading, changePage, currentPage, searchTerm, changeSearch }) => {

  const navigate = useNavigate();
  const { page, searchQuery } = useParams();

  function changeToPrevPage() {
    currentPage--;
    changePage(currentPage);
    navigate(`/search/${searchTerm}/${currentPage}`);
  }

  function changeToNextPage() {
    currentPage++;
    changePage(currentPage);
    navigate(`/search/${searchTerm}/${currentPage}`);
  }

  useEffect(() => {
    console.log(searchQuery);
    if (parseInt(page) !== currentPage && searchQuery !== searchTerm) {
      changePage(page);
      changeSearch(searchQuery);
    } else if (parseInt(page) !== currentPage) {
      changePage(page);
    } else if (searchQuery !== searchTerm) {
      changeSearch(searchQuery);
    };
  });

  return (
    <main>
      <div className="movies-container">
        {
          (isLoading)
            ? <h2>Loading...</h2>
            : (!isLoading && movies)
              ? (
                movies.map((movie, index) => {
                  return (
                    <Link to={`/details/${movie.imdbID}`} key={index} className="movie-card">
                      <MovieCard key={movie.imdbID} data={movie} />
                    </Link>
                  );
                })
              )
              : <h2>No Results</h2>
        }
      </div>
      <div className="prev-next-div">
        {
          (currentPage > 1)
            ? <button onClick={changeToPrevPage} className="btn">Prev</button>
            : <></>
        }
        {
          (currentPage < 100)
            ? <button onClick={changeToNextPage} className="btn">Next</button>
            : <></>
        }
      </div>
    </main>
  );
};

export default SearchResults;