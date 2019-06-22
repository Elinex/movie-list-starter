import React from 'react';

import MovieListItem from './MovieListItem'

const MovieList = (props) => {
    return (
        <ul>
            {console.log(props )
            }
            {props.movies.map(movie => (
                <MovieListItem 
                    movie={movie} 
                    key={movie.title} 
                    isWatched={props.isWatched}
                />
            ))}
        </ul>
    )
}

export default MovieList;