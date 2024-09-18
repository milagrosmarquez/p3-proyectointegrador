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
    };
  }

  componentDidMount() {
    const { id } = this.props;
    let url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=ac8eace47b1cb77be341847000943da0`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          pelicula: data,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { error, isLoaded, pelicula } = this.state;

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

        </div>
      );
    }
  }


}

export default DetallePelicula;