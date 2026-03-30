import { useEffect, useState } from "react";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((r) => r.json())
      .then(setComments);
  }, [postId]);

  return (
    <div>
      {comments.map((c) => (
        <p key={c.id}>{c.body}</p>
      ))}
    </div>
  );
}

export default CommentList;