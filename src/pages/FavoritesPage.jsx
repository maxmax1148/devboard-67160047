import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";

function FavoritesPage() {
  const { favorites } = useFavorites();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const results = await Promise.all(
        favorites.map((id) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((r) =>
            r.json()
          )
        )
      );
      setPosts(results);
    }

    if (favorites.length > 0) fetchPosts();
  }, [favorites]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Favorites</h2>
      {posts.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPage;