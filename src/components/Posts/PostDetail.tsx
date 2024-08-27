import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchPosts } from "../../actions/posts";
import { IPosts } from "../../types/Posts";
import "./PostDetail.css";

const queryClient = new QueryClient();

export function PostDetail({ post }) {
  // replace with useQuery
  const data: IPosts[] = [];

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data &&
        data?.length > 0 &&
        data.map((comment) => (
          <li key={comment.id}>
            {comment.title}: {comment.body}
          </li>
        ))}
    </>
  );
}
