import React from 'react';

import AddMovie from './AddMovie.js';
import SearchBar from './SearchBar.js';
import MovieList from './Movielist.js';
import { movies } from './moviesData.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      movies: movies,
      textAddMovie: '',
      notFound: null,
      isWatched: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.handlerChangeAddMovie = this.handlerChangeAddMovie.bind(this);
    this.changeMovieWatched = this.changeMovieWatched.bind(this);
  }

  handleSearch(e){
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
      title: this.state.textAddMovie,
      watched: true,
      year: 1995, 
      runtime: '100 min', 
      metascore: 46, 
      imdbRating: '6.2'
    };
    movies.push(newMovie);
    this.setState({
      movies: movies,
      textAddMovie: '',
    })
    event.target.reset();
  }

  // method used in MovieListItem
  changeMovieWatched(movieClicked){
    // change movie.watched property:
    movieClicked.watched = !movieClicked.watched;

    // update state.movies with the updated movie:
    this.setState((state) => {
      return {
        movies: state.movies
        .filter(
          movie => movie.title !== movieClicked.title
        )
        .concat(movieClicked)
      }
    })
    
  }

  render(){
    return (
      <div style={styles.mainDiv}>
        <div>
          <h1>MovieList</h1>
        </div>
        <div>
          <AddMovie 
            addMovie={this.addMovie}
            value={this.state.textAddMovie}
            handlerChangeEvent={this.handlerChangeAddMovie}
          />
          <SearchBar handlerSearchEvent={this.handleSearch} />
        </div>
        <div>
          <MovieList 
            movies={this.state.movies}
            isWatched={this.state.isWatched}
            changeMovieWatched={this.changeMovieWatched}
          />

          {(this.state.notFound && this.state.movies.length === 0) && (
            <p>No movie by that name found.</p>
          )}
        </div>
      </div>
    )
  }
}

const styles = {
  mainDiv: {
    // display: 'block'
  }
}

export default App;