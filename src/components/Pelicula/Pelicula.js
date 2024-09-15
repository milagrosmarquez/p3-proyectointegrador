import React, { Component } from 'react';
import "./Pelicula.css"

class Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false,
      favoritos: [],
    };
  }

  handleShowDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription,
    }));
  };

  
  manejarFavoritos = (pelicula) => {
    this.setState(prevState => {
      
    });
  };
  

  render() {
    const { pelicula } = this.props;
    const { showDescription } = this.state;

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
            {showDescription ? 'Ocultar' : 'Ver descripcion'}
          </button>

          
            <button onClick={this.manejarFavoritos}>
            {/* esFavorito ? '❤️' : '🤍' */}
          </button> 


        </li></div>
    );
  }
}

export default Pelicula;