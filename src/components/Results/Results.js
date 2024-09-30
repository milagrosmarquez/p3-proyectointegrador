import { Component } from "react";
import Movie from "../Movie/Movie";
import Loader from "../Loader/Loader";
import "./Results.css"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
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
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading, error } = this.state;

    if (loading) {
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
              <Movie key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No se encuentran resultados</p>
          )}
        </section>
      </div>
    );
  }
}

export default Results;