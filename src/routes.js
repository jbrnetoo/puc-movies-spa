
import { MovieDetail } from "./views/movieDetail/MovieDetail";
import { Home } from "./views/Home";
import { Movies } from "./views/movies/Movies";
import { RootLayout } from "./views/RootLayout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);