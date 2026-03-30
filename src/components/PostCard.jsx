import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px" }}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>

      <button onClick={() => toggleFavorite(post.id)}>
        {favorites.includes(post.id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default PostCard;