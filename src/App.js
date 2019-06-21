import React from 'react';

import SearchBar from './SearchBar.js'
import MovieList from './Movielist.js';

const App = () => {
    return (
        <div>
            <h1>MovieList</h1>
            <SearchBar />
            <MovieList />
        </div>
    )
}

export default App;