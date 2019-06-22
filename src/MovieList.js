import React from 'react';

import MovieListItem from './MovieListItem'

const MovieList = (props) => {
  return (
    <div>
      <div>{props.isWatched ? 'Watched' : 'To Watch'}</div>
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