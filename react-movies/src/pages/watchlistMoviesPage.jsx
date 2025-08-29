import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist"; 
import WriteReview from "../components/cardIcons/writeReview"; 

const WatchlistMoviesPage = () => {
  const { watchlist: movieIds } = useContext(MoviesContext);

  const movieQueries = useQueries({
    queries: movieIds.map((id) => ({
      queryKey: ["movie", { id }],
      queryFn: getMovie,
    })),
  });

  const isPending = movieQueries.find((m) => m.isPending);
  if (isPending) return <Spinner />;

  const movies = movieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="My Watchlist"
      movies={movies}
      action={(movie) => (
        <>
          <RemoveFromWatchlist movie={movie} />
          <WriteReview movie={movie} />
        </>
      )}
    />
  );
};

export default WatchlistMoviesPage;
