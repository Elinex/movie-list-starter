import React from 'react';

import SearchBar from './SearchBar.js'
import MovieList from './Movielist.js';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movies: [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
            ]
        };
    }

    render(){
        return (
            <div>
                <h1>MovieList</h1>
                <SearchBar />
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default App;