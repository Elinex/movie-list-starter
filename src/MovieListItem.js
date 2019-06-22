import React from 'react';

class MovieListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMovieInfo: false
    }
    this.changeMovieInfo = this.changeMovieInfo.bind(this);
  };

  changeMovieInfo () {
    this.setState(state => {
      return {
        showMovieInfo: !state.showMovieInfo
      }
    })
  }

  render () {
    const texts = ['watched', 'year', 'runtime', 'metascore', 'imdbRating'];

    const templateMovieInfo = (
      <div>
        {texts.map(text => 
          {
            if (text === 'watched'){
              return (<p key={text}>{text}: icon</p>)
            } else {
              return (<p key={text}>{text}: {this.props.movie[text]}</p>)
            }
          }
          
        )}
      </div>
    );

    return (
      <li>
        <p onClick={() => this.changeMovieInfo()}>
          {this.props.movie.title}
        </p>
        {this.state.showMovieInfo && templateMovieInfo}
        <button onClick={() => this.props.changeMovieWatched(this.props.movie)} >
          {this.props.isWatched ? 'Watched' : 'To Watch'}
        </button>
      </li>
    )
  }

}

export default MovieListItem;