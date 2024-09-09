import { useState, useEffect } from "react";

import { PostDetail } from "./PostDetail";
import { IPosts } from "../../types/Posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../../actions/posts";
import { ArticleCardVertical } from "../ArticleItem/ArticleItem";

export function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<null | IPosts>(null);
  const queryClient = useQueryClient();
  const maxPostPage = 10;

  const deleteMutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
  });

  const updateMutation = useMutation({
    mutationFn: (postId: number) => updatePost(postId),
  });

  useEffect(() => {
    if (currentPage >= maxPostPage) return;

    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ["posts", nextPage],
      queryFn: () => fetchPosts(nextPage),
    });
  }, [currentPage]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    staleTime: 2000,
  });

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Error ...</h1>;

  return (
    <>
      <ul>
        {data.map((post: any) => (
          <div
            onClick={() => {
              setSelectedPost(post);
              deleteMutation.reset();
            }}
            key={post.id}
          >
            <ArticleCardVertical
              category={"Tecnologia"}
              title={post.title}
              author={"Júlio Moraes"}
              date={post.data}
            ></ArticleCardVertical>
          </div>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage === 10}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && (
        <PostDetail
          post={selectedPost}
          deleteMutation={deleteMutation}
          updateMutation={updateMutation}
        />
      )}
    </>
  );
}
