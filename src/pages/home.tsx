import { Container } from "@mantine/core";
import { Posts } from "../components/Posts/Posts";

export default function home() {
  return (
    <Container>
      <h1>Blog Posts</h1>
      <Posts></Posts>
    </Container>
  );
}
