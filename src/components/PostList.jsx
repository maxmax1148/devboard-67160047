import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data.slice(0, 20)));
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

export default PostList;