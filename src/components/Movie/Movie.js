import { Component } from 'react';
import "./Movie.css"
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      isFavorite: false,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const isInFavorites = parsedArray.includes(this.props.movie.id);
      this.setState({
        isFavorite: isInFavorites
      });
    }
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
      parsedArray.push(this.props.movie.id);
      const stringArray = JSON.stringify(parsedArray);
      localStorage.setItem("favoritos", stringArray);
    } else {
      const firstMovie = [this.props.movie.id];
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
    const remainingFavorites = parsedArray.filter(id => id !== this.props.movie.id);
    const stringArray = JSON.stringify(remainingFavorites);
    localStorage.setItem("favoritos", stringArray);
    this.setState({
      isFavorite: false
    });
  };

  handleShowDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  };

  render() {
    const { movie } = this.props;
    const { showDescription, isFavorite } = this.state;

    return (
      <div className="pelicula">
        <ul>
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.release_date}</p>
            {showDescription && <p>{movie.overview}</p>}

            <ul>
              <li>
                <button onClick={this.handleShowDescription}>
                  {showDescription ? 'Ocultar' : 'Descripción'}
                </button>
              </li>
              <li>
                <button onClick={this.handleFavorites}>
                  {isFavorite ? '❤️' : '🤍'}
                </button>
              </li>
              <li>
                <Link to={`/detalle/${movie.id}`}>
                  <button>Detalle</button>
                </Link>
              </li>
            </ul>

          </li>
        </ul>
        
      </div>
    );
  }
}

export default Movie;