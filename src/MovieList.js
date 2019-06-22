import React from 'react';

import MovieListItem from './MovieListItem'

class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWatched: true
    };
    this.changeIsWatched = this.changeIsWatched.bind(this);
  }

  // change the button text
  changeIsWatched(e){
    const value = e.target.value;
    this.setState({
      isWatched: value === 'watched' ? true : false
    });
  }

  render (){

    const template = (value) => {
      const filterMovies = this.props.movies.filter(
        movie => movie.watched === value
      );

      return filterMovies.map(movie => (
        <MovieListItem 
          movie={movie} 
          key={movie.title} 
          isWatched={value}
          changeMovieWatched={this.props.changeMovieWatched}
        />
      ))
    }

    return (
      <div>
        <button type='submit' value={'watched'} onClick={(e) => this.changeIsWatched(e)}>Watched</button>
        <button type='submit' value={'to watch'} onClick={(e) => this.changeIsWatched(e)}>To Watch</button>
        <ul>
          { this.state.isWatched
            ? template(this.state.isWatched)
            : template(this.state.isWatched)
          }
        </ul>
      </div>
    )
  } 

}

export default MovieList;