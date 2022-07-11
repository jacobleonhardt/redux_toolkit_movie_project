import React from 'react';
import { MovieSearch } from './features/movies/MovieSearch'
import { MovieResults } from './features/movies/MovieResults';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MovieSearch />
        <MovieResults />
      </header>
    </div>
  );
}

export default App;
