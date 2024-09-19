import { Component } from "react";
import Pelicula from "../Pelicula/Pelicula"
import Loader from "../Loader/Loader";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      Cargando: true,
      error: null,
    };
  }

  componentDidMount() {
    const { query } = this.props;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ac8eace47b1cb77be341847000943da0&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          Cargando: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          Cargando: false,
        });
      });
  }

  render() {
    const { movies, Cargando, error } = this.state;

    if (Cargando) {
      return <Loader />; 
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <section className="card-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Pelicula key={movie.id} pelicula={movie} />
            ))
          ) : (
            <p>No se encuentran resultados</p> 
          )}
        </section>
      </div>
    );
  }
}

export default Resultados;