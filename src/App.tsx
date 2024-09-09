import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Header } from "./components/Header/Header";
import MainRouter from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="dark">
          <Header></Header>
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
          <MainRouter></MainRouter>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
