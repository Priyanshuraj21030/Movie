import React from "react";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
