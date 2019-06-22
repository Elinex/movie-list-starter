import React from 'react';

const MovieListItem = (props) => (
    <li>
        {props.movie.title}
        <button onClick={() => props.changeMovieWatched(props.movie)} >
            {props.isWatched ? 'Watched' : 'To Watch'}
        </button>
    </li>
)

export default MovieListItem;