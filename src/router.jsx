import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Catalogue, Compilation, Home, MyMovies, NotFound, Search, Single } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "single-page/:movie", element: <Single /> },
      { path: "/catalogue", element: <Catalogue /> },
      { path: "/compilation", element: <Compilation /> },
      { path: "/search", element: <Search /> },
      { path: "/my-movies", element: <MyMovies /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);
