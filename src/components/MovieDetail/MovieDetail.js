import { Component } from 'react';
import Loader from '../Loader/Loader';
import "./MovieDetail.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      movie: {},
      isLoaded: false,
      isFavorite: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=ac8eace47b1cb77be341847000943da0`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          movie: data,
        });

        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
          const parsedArray = JSON.parse(storage);
          const isInFavorites = parsedArray.includes(data.id);
          this.setState({
            isFavorite: isInFavorites
          });
        }
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  handleFavorites = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  };

  addFavorite = () => {
    const storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      parsedArray.push(this.state.movie.id);
      const stringArray = JSON.stringify(parsedArray);
      localStorage.setItem("favoritos", stringArray);
    } else {
      const firstMovie = [this.state.movie.id];
      const stringArray = JSON.stringify(firstMovie);
      localStorage.setItem("favoritos", stringArray);
    }
    this.setState({
      isFavorite: true
    });
  };

  removeFavorite = () => {
    const storage = localStorage.getItem("favoritos");
    const parsedArray = JSON.parse(storage);
    const remainingFavorites = parsedArray.filter(id => id !== this.state.movie.id);
    const stringArray = JSON.stringify(remainingFavorites);
    localStorage.setItem("favoritos", stringArray);
    this.setState({
      isFavorite: false
    });
  };

  render() {
    const { error, isLoaded, movie } = this.state;
    const { isFavorite } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <div className="detalle">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <p>Estreno: {movie.release_date}</p>
          <p>Duración: {movie.runtime} min</p>
          <p>Géneros:</p>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{movie.overview}</p>

          <button onClick={this.handleFavorites}>
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      );
    }
  }
}

export default MovieDetail;