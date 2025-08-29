import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchlist = ({ movie }) => {
  const { removeFromWatchlist } = useContext(MoviesContext);
  const handleClick = (e) => {
    e.preventDefault();
    removeFromWatchlist(movie);
  };
  return (
    <IconButton aria-label="remove from watchlist" onClick={handleClick}>
      <PlaylistRemoveIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchlist;
