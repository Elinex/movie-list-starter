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

const moviesAdded = [];

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movies: movies,
            textAddMovie: 'Add',
            notFound: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.handlerChangeAddMovie = this.handlerChangeAddMovie.bind(this);
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

    handlerChangeAddMovie (e){
        e.preventDefault();
        this.setState({
            textAddMovie: e.target.value
        })
    }

    addMovie(event){
        event.preventDefault();
        if(this.state.textAddMovie === ''){
            alert('empty title!');
            return;
        }
        const newMovie = {
            title: this.state.textAddMovie
        };
        moviesAdded.push(newMovie);
        this.setState({
            movies: moviesAdded,
            textAddMovie: 'Add'
        })
    }

    render(){
        return (
            <div>
                <h1>MovieList</h1>
                <AddMovie 
                    addMovie={this.addMovie}
                    value={this.state.textAddMovie}
                    handlerChangeEvent={this.handlerChangeAddMovie}
                />
                <SearchBar handlerChangeEvent={this.handleChange} />
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