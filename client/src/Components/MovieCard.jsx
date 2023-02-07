
const MovieCard = ({ data }) => {
  return (
    <>
      <img src={data.Poster} alt={`Poster for ${data.Title}`} className="movie-card-img" />
      <h3>{data.Title}</h3>
    </>
  );
};

export default MovieCard;