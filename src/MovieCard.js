import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="movie-poster"
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p className="movie-year">Year: {movie.year}</p>
        <p className="movie-rating">Rating: {movie.rating}/10</p>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;