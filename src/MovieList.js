import React from 'react';

var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

const MovieList = () => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.title}>{movie.title}</li>
            ))}
        </ul>
    )
}

export default MovieList;