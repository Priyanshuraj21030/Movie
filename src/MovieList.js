import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Temporarily use the API key directly to test if it works
  const API_KEY = "f86f3613cbbc5fbe60029b627d1cf0d6";
  const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`;

  const fetchMovies = useCallback(async () => {
    try {
      const url = searchTerm ? SEARCH_URL : POPULAR_URL;
      console.log("Fetching from URL:", url); // Debug log

      if (!API_KEY) {
        throw new Error("API key is missing. Check your .env file.");
      }

      const response = await fetch(url);
      console.log("Response status:", response.status); // Debug log

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch movies");
      }

      const data = await response.json();
      console.log("Movies fetched:", data.results.length); // Debug log

      if (!data.results || !Array.isArray(data.results)) {
        throw new Error("Invalid data format received from API");
      }

      const transformedMovies = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : "N/A",
        rating: movie.vote_average || "N/A",
        description: movie.overview || "No description available",
        poster: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Poster",
      }));

      setMovies((prev) =>
        searchTerm || page === 1
          ? transformedMovies
          : [...prev, ...transformedMovies]
      );
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err); // Debug log
      setError(err.message);
      setLoading(false);
    }
  }, [API_KEY, POPULAR_URL, SEARCH_URL, searchTerm, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setMovies([]);
    setLoading(true);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="movie-container">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {!loading && !error && (
        <div className="load-more">
          <button onClick={loadMore}>Load More Movies</button>
        </div>
      )}

      {loading && <div className="loading">Loading movies...</div>}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}

export default MovieList;
