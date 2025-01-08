import { useState, useEffect } from "react";
import axios from "axios";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // To track the movie being edited
  const [editedMovie, setEditedMovie] = useState({ Title: "", Year: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const backendUrl = "http://localhost:3333";
        const response = await axios.get(`${backendUrl}/movies`);
        setFavorites(response.data.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      const backendUrl = "http://localhost:3333";
      await axios.delete(`${backendUrl}/movies/${id}`);
      setFavorites(favorites.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  const handleEditClick = (movie) => {
    setEditingId(movie.id);
    setEditedMovie({ Title: movie.Title, Year: movie.Year });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async (id) => {
    try {
      const backendUrl = "http://localhost:3333";
      await axios.put(`${backendUrl}/movies/${id}`, editedMovie);
      setFavorites(
        favorites.map((movie) =>
          movie.id === id ? { ...movie, ...editedMovie } : movie
        )
      );
      setEditingId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  if (loading) {
    return <div>Loading favorites...</div>;
  }

  if (favorites.length === 0) {
    return <div>No favorites found!</div>;
  }

  const goToSearch = () => {
    navigate("/");
  };

  return (
    <>
      <button className="favorite-button" onClick={goToSearch}>
        Got To Search
      </button>
      <div className="favorites">
        <h1>Favorites</h1>
        <div className="favorites-grid">
          {favorites.map((movie) =>
            editingId === movie.id ? (
              // Edit Mode
              <div key={movie.id} className="favorite-card">
                <input
                  type="text"
                  name="Title"
                  value={editedMovie.Title}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="Year"
                  value={editedMovie.Year}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleSaveEdit(movie.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              // View Mode
              <div key={movie.id} className="favorite-card">
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <button onClick={() => handleEditClick(movie)}>Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
