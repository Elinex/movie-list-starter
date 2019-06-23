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
              return (
                <p key={text}>{text}: {this.props.movie[text] ? 'yes': 'no'}</p>
              )
            } else {
              return (<p key={text}>{text}: {this.props.movie[text]}</p>)
            }
          }
        )}
      </div>
    );

    return (
      <div style={styles.root}>

        <div onClick={() => this.changeMovieInfo()}>
          {this.props.movie.title}
          {this.state.showMovieInfo && templateMovieInfo}
        </div>

        <div>
          <button onClick={() => this.props.changeMovieWatched(this.props.movie)} >
            {this.props.isWatched ? 'Watched' : 'To Watch'}
          </button>
        </div>

      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: 'solid 1px',
    margin: '5px',
    minHeight: '2.5em'
  },
}
export default MovieListItem;