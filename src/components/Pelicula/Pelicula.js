import React, { Component } from 'react';
import "./Pelicula.css"

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

  manejarFavoritos = () => {
    if (this.state.esFavorito) {
      this.sacarFavorito();
    } else {
      this.agregarFavorito();
    }
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
        <li key={pelicula.id}>
          <h3>{pelicula.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={pelicula.title}
          />
          <p>{pelicula.release_date}</p>
          {showDescription && <p>{pelicula.overview}</p>}

          <button onClick={this.handleShowDescription}>
            {showDescription ? 'Ocultar' : 'Ver descripción'}
          </button>

          <button onClick={this.manejarFavoritos}>
            {esFavorito ? 'Sacar de favoritos 🤍' : 'Agregar a favoritos ❤️'}
          </button>
        </li>
      </div>
    );
  }
}

export default Pelicula;