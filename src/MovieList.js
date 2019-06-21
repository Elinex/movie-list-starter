import React from 'react';

import MovieListItem from './MovieListItem'

const MovieList = ({movies}) => {
    return (
        <ul>
            {movies.map(movie => (
                <MovieListItem movie={movie} key={movie.title}/>
            ))}
        </ul>
    )
}

export default MovieList;