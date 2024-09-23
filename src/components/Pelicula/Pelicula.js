import React, { Component } from 'react';
import "./Pelicula.css"
import { Link } from 'react-router-dom';

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      esFavorito: false,
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const estaEnFavoritos = parsedArray.includes(this.props.pelicula.id);
      this.setState({
        esFavorito: estaEnFavoritos
      });
    }
  }

  manejarFavoritos = () => {
    if (this.state.esFavorito) {
      this.sacarFavorito();
    } else {
      this.agregarFavorito();
    }
  };

  agregarFavorito = () => {
    const storage = localStorage.getItem("favoritos");
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      parsedArray.push(this.props.pelicula.id);
      const stringArray = JSON.stringify(parsedArray);
      localStorage.setItem("favoritos", stringArray);
    } else {
      const primerMovie = [this.props.pelicula.id];
      const stringArray = JSON.stringify(primerMovie);
      localStorage.setItem("favoritos", stringArray);
    }
    this.setState({
      esFavorito: true
    });
  };

  sacarFavorito = () => {
    const storage = localStorage.getItem("favoritos");
    const parsedArray = JSON.parse(storage);
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.pelicula.id);
    const stringArray = JSON.stringify(favoritosRestantes);
    localStorage.setItem("favoritos", stringArray);
    this.setState({
      esFavorito: false
    });
  };

  handleShowDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  };

  render() {
    const { pelicula } = this.props;
    const { showDescription, esFavorito } = this.state;

    return (
      <div className="Pelicula">
        <ul>
        <li key={pelicula.id}>
          <h3>{pelicula.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <p>{pelicula.release_date}</p>
          {showDescription && <p>{pelicula.overview}</p>}

          <ul>
            <li>
              <button onClick={this.handleShowDescription}>
                {showDescription ? 'Ocultar' : 'Descripción'}
              </button>
            </li>
            <li>
              <button onClick={this.manejarFavoritos}>
                {esFavorito ? '❤️' : '🤍'}
              </button>
            </li>
            <li>
              <Link to={`/detalle/${pelicula.id}`}>
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

export default Pelicula;