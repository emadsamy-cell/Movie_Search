import "./Card.css";
import axios from "axios";
import PropTypes from "prop-types";

export default function Card({ key, movie, favorite }) {
  const handleAddFavorite = async (movie) => {
    const backendUrl = "http://localhost:3333";
    const response = await axios.post(`${backendUrl}/movies`, movie);
    console.log(response.data);
  };

  return (
    <div className="movie-card" key={key}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {!favorite && (
        <button onClick={() => handleAddFavorite(movie)}>
          Add To Favorite
        </button>
      )}
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.number.isRequired, // Ensure index is a required number
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired, // Poster must be a string
    Title: PropTypes.string.isRequired, // Title must be a string
    Year: PropTypes.string.isRequired, // Year must be a string
  }).isRequired,
  favorite: PropTypes.bool, // Favorite must be a boolean
};
