import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [watchlist, setWatchlist] = useState([]); // NEW: state to store Watchlist movie IDs

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  //console.log(myReviews);

  const addToWatchlist = (movie) => {                 // NEW: add a movie to the Watchlist
    setWatchlist((w) => (w.includes(movie.id) ? w : [...w, movie.id]));
  };

  const removeFromWatchlist = (movie) => {            // NEW: remove a movie from the Watchlist
    setWatchlist((w) => w.filter((id) => id !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        watchlist,               // NEW: expose Watchlist state
        addToWatchlist,          // NEW: expose add-to-watchlist handler
        removeFromWatchlist,     // NEW: expose remove-from-watchlist handler
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
