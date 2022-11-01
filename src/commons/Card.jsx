
const img = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie }) => {
  return (
      <div className="card d-grid">
        <img
          src={`${img}${movie.poster_path}`}
          className="card-img-top"
          alt="img"
        />
        <div className="card-text text-center">
          <p>{movie.title}</p>
          <i className="bi bi-plus-square btn"></i>
        </div>
      </div>
    
  );
};
export default Card;
