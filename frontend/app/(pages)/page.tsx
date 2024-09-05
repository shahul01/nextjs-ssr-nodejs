import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Home } from "../components/pages/Home";
// import { backendUrl } from "../utils/constants";

async function getTodos() {
  const todos = await fetch(`http://localhost:8010/todos`);
  const resTodos = await todos.json();
  console.log(`resTodos: `, resTodos);
  return resTodos;
};

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  )

};
