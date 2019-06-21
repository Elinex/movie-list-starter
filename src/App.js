import React from 'react';

import AddMovie from './AddMovie.js';
import SearchBar from './SearchBar.js';
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
            notFound: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const value = e.target.value.toLowerCase();

        const foundMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(value)
        );

        this.setState({
            movies: foundMovies
        })

        if (foundMovies.length === 0){
            this.setState({
                notFound: true
            })
        }
    }

    render(){
        return (
            <div>
                <h1>MovieList</h1>
                <AddMovie />
                <SearchBar 
                    handlerChangeEvent={this.handleChange} 
                />
                <MovieList movies={this.state.movies}/>
                {(this.state.notFound && this.state.movies.length === 0) && (
                    <p>
                        No movie by that name found.
                    </p>
                )}
            </div>
        )
    }
}

export default App;