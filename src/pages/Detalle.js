import { Component } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';

class Detalle extends Component {

  render() {
    
    const { id } = this.props.match.params;

    return (
      <>
        <MovieDetail id={id} />
      </>
    );
  }
}

export default Detalle;