import React from 'react';
import { MovieSearch } from './features/movies/MovieSearch'
import { MovieDisplay } from './features/movies/MovieDisplay';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MovieSearch />
        <MovieDisplay />
      </header>
    </div>
  );
}

export default App;
