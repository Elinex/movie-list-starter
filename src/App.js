import React from 'react';

import SearchBar from './SearchBar.js'
import MovieList from './Movielist.js';

const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movies: movies
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const value = e.target.value.toLowerCase();
        this.setState({
            movies: movies.filter(movie => 
                movie.title.toLowerCase().includes(value)
            )
        })
    }

    render(){
        return (
            <div>
                <h1>MovieList</h1>
                <SearchBar 
                    handlerChangeEvent={this.handleChange} 
                />
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default App;