import React from 'react';

import MovieListItem from './MovieListItem'

const MovieList = (props) => {
  return (
    <div>
      <button onClick={() => props.changeIsWatched()}>{props.isWatched ? 'Watched' : 'To Watch'}</button>
      <ul>
        {props.movies.map(movie => (
          <MovieListItem 
            movie={movie} 
            key={movie.title} 
            isWatched={props.isWatched}
          />
        ))}
      </ul>
    </div>
  )
}

export default MovieList;