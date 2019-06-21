import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        var movies = [
            {title: 'Mean Girls'},
            {title: 'Hackers'},
            {title: 'The Grey'},
            {title: 'Sunshine'},
            {title: 'Ex Machina'},
          ];

        return (
            <div>
                <h1>MovieList</h1>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.title}>{movie.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;