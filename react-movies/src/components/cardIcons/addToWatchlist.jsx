import React, { useContext } from "react";                   // NEW: useContext to access MoviesContext
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext"; // NEW: import MoviesContext

const AddToWatchlistIcon = ({ movie }) => {
  const { addToWatchlist } = useContext(MoviesContext);      // NEW: get addToWatchlist from context

  const handleClick = (e) => {
    e.preventDefault();
    addToWatchlist(movie);                                   // NEW: add the movie to Watchlist
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleClick}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;
