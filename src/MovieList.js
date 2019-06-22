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

  changeIsWatched(){
    this.setState((state) => {
      return {
        isWatched: !state.isWatched
      }
    })
  }

  render (){

    const template = (value) => {
      this.props.movies.map(movie => (
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
        <button onClick={() => this.changeIsWatched()}>Watched</button>
        <button onClick={() => this.changeIsWatched()}>To Watch</button>
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