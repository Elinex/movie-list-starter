import React from 'react';

const MovieList = ({movies}) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.title}>{movie.title}</li>
            ))}
        </ul>
    )
}

export default MovieList;