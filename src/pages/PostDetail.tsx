import { useParams } from "react-router-dom";

export function PostDetail() {
  // Get URL parameters
  const { postId } = useParams(); // Replace 'id' with your actual parameter name

  return (
    <div>
      <h1>PostDetail</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
}
