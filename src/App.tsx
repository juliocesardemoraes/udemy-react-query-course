import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Posts } from "./components/Posts/Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { Header } from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Header></Header>
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
          <Container>
            <h1>Blog Posts</h1>
            <Posts></Posts>
          </Container>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
