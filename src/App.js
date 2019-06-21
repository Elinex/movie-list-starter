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
            movies: movies,
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const value = event.target.value;
        
        this.setState({
            movies: movies.filter(movie => movie.title === value)
        })

        if (value === '') {
            this.setState({
                movies: movies
            })
        }
    }

    render(){
        return (
            <div>
                {console.log(this.state.movies)}
                <h1>MovieList</h1>
                <SearchBar handlerChangeEvent={this.handleChange} />
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default App;