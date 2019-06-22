import React from 'react';

const MovieListItem = (props) => (
    <li>
        {props.movie.title}
        <button>
            {props.isWatched ? 'Watched' : 'To Watch'}
        </button>
    </li>
)

export default MovieListItem;