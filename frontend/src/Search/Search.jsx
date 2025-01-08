import { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const backendUrl = "http://localhost:3333";
    if (!title) return;
    const response = await axios.get(
      `${backendUrl}/omdb/search?title=${title}`
    );
    setMovies(response.data.data);
    setTitle("");
  };

  const goToFavorite = () => {
    navigate("/favorite");
  };

  return (
    <>
      <button className="favorite-button" onClick={goToFavorite}>
        Favorites
      </button>
      <div className="movie-search">
        <div className="search-bar">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search for movies..."
            className="search-input"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="movie-grid">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieSearch;
