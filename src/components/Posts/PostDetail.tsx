import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../../actions/posts";
import { IPosts } from "../../types/Posts";
import "./PostDetail.css";

export function PostDetail({
  post,
  deleteMutation,
  updateMutation,
}: {
  post: IPosts;
  deleteMutation: any;
  updateMutation: any;
}) {
  // replace with useQuery
  // const data: IPosts[] = [];

  const {
    data,
    isLoading,
    isError,
  }: { data: any; isLoading: boolean; isError: boolean } = useQuery({
    queryKey: [`comments-${post.id}`],
    queryFn: () => fetchComments(post.id),
  });

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Error ...</h1>;

  return (
    <main className="blog__content">
      <h3>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      <button onClick={() => updateMutation.mutate(post.id)}>
        Update title
      </button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment: any) => (
        <li key={comment.id}>
          {comment.title}: {comment.body}
        </li>
      ))}
    </main>
  );
}
