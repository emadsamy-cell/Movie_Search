import Favorite from "./Favorite/Favorite";
import MovieSearch from "./Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
