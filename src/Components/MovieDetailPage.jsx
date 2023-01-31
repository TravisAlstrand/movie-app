import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../ApiCalls";

const MovieDetailPage = () => {

  const [movie, setMovie] = useState({});
  const { title } = useParams();

  useEffect(() => {
    console.log(title);
    fetchData();
  }, [title])

  async function fetchData() {
    const results = await getSingleMovie(title);
    setMovie(results);
  };

  return (
    <main>
      <h1>{movie?.Title}</h1>
    </main>
  );
};

export default MovieDetailPage;