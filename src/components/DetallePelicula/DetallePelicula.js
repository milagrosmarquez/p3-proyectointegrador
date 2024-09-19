import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import "./DetallePelicula.css"

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      pelicula: {},
      isLoaded: false,
      esFavorito: false,
    };
  }

  componentDidMount() {
    const{id} = this.props;
   
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=ac8eace47b1cb77be341847000943da0`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          pelicula: data,
        });


        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
          const parsedArray = JSON.parse(storage);
          const estaEnFavoritos = parsedArray.includes(data.id);
          this.setState({
            esFavorito: estaEnFavoritos
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
      parsedArray.push(this.state.pelicula.id);
      const stringArray = JSON.stringify(parsedArray);
      localStorage.setItem("favoritos", stringArray);
    } else {
      const primerMovie = [this.state.pelicula.id];
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
    const favoritosRestantes = parsedArray.filter(id => id !== this.state.pelicula.id);
    const stringArray = JSON.stringify(favoritosRestantes);
    localStorage.setItem("favoritos", stringArray);
    this.setState({
      esFavorito: false
    });
  };

  render() {
    const { error, isLoaded, pelicula } = this.state;
    const { esFavorito } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {

      return (

        <div className="detalle">
          <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
          <h1>{pelicula.title}</h1>
          <p>Rating: {pelicula.vote_average}</p>
          <p>Estreno: {pelicula.release_date}</p>
          <p>Duración: {pelicula.runtime} min</p>
          <p>Géneros:</p>
          <ul>
            {pelicula.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>))}
          </ul>
          <p>{pelicula.overview}</p>

        
              <button onClick={this.manejarFavoritos}>
                {esFavorito ? 'Sacar de favoritos 🤍' : '❤️'}
              </button>

        </div>
      );
    }
  }


}

export default DetallePelicula;