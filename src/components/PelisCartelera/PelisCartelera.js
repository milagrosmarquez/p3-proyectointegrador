import React, { Component } from 'react';
import Pelicula from "../Pelicula/Pelicula"
import "./PelisCartelera.css"
import Loader from "../Loader/Loader"

class PelisCartelera extends Component {
    constructor() {
      super();
      this.state = {
        isLoaded: false,
        peliscartelera: [],
        error: null,
      };
    }
  
    componentDidMount() {
      let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ac8eace47b1cb77be341847000943da0';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            isLoaded: true,
            peliscartelera: data.results,
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
      const { error, isLoaded, peliscartelera } = this.state;
  
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loader/>;
      } else {
        return (
          <section className="card-container">
            <ul>
              {peliscartelera?.map((pelicula) => (
                <Pelicula key={pelicula.id} pelicula={pelicula} />
              ))}
            </ul>
          </section>
        );
      }
    }
  }
  
  export default PelisCartelera;