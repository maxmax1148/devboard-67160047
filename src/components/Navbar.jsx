import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav style={{ background: "blue", color: "white", padding: "10px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/favorites">❤️ ({favorites.length})</Link>
    </nav>
  );
}

export default Navbar;