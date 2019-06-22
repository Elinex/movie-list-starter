import React from 'react';

import MovieListItem from './MovieListItem'

const MovieList = (props) => {
  return (
    <div>
      <button onClick={() => props.changeIsWatched()}>Watched</button>
      <button onClick={() => props.changeIsWatched()}>To Watch</button>
      <ul>
        {props.movies.map(movie => (
          <MovieListItem 
            movie={movie} 
            key={movie.title} 
            isWatched={props.isWatched}
            changeMovieWatched={props.changeMovieWatched}
          />
        ))}
      </ul>
    </div>
  )
}

export default MovieList;