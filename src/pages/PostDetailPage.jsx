import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentList from "../components/CommentList";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((r) => r.json())
      .then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <CommentList postId={post.id} />
    </div>
  );
}

export default PostDetailPage;