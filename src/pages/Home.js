import Search from "../components/Search/Search";
import "../index.css"
import MovieGrid from "../components/MovieGrid/MovieGrid"
import { Component } from 'react';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <>
          <h1>Metflix</h1>
          <Search history={this.props.history} />
          <h2>Cartelera⭐</h2>
          <MovieGrid 
            url='https://api.themoviedb.org/3/movie/now_playing?api_key=ac8eace47b1cb77be341847000943da0' 
            showAllLink="/Cartelera" 
            showAll={false} 
            filtered={false}
          />
          <h2>Populares⭐</h2>
          <MovieGrid 
            url='https://api.themoviedb.org/3/movie/popular?api_key=ac8eace47b1cb77be341847000943da0' 
            showAllLink="/Populares" 
            showAll={false} 
            filtered={false}
          />
        </>
      );
    }
  }
  
  export default Home;