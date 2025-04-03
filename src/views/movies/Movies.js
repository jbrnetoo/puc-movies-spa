import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import styles from "./Movies.module.css";

export function Movies(){
  const movies = useMovies();

  return (
    <section className={styles.moviesContainer}>
      <h1>Filmes populares</h1>

      <div className={styles.moviesList}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}