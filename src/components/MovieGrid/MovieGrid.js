import { Component } from 'react';
import Pelicula from "../Pelicula/Pelicula"
import Loader from "../Loader/Loader"

class MovieGrid extends Component {
        constructor(props) {
          super(props);
          this.state = {
            movies: [],
          };
        }
      
        componentDidMount() {
          fetch(this.props.url)
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                movies: data.results,
              });
              console.log(data);
            })
            .catch((error) => console.log(error));
        }
      
        render() {
          const { movies } = this.state;
      
          return (
            <div className="movie-grid">
              {movies.length === 0 ? (
                <Loader />
              ) : (
                movies.map((movie, idx) =>
                  idx < 5 ? (
                    <Pelicula
                      key={movie.id}
                      title={movie.original_title}
                      desc={movie.overview}
                      img={movie.backdrop_path}
                      id={movie.id}
                    />
                  ) : null
                )
              )}
            </div>
          );
        }
      }
      
      export default MovieGrid;