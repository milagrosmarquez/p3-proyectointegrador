import { Component } from 'react';
import DetallePelicula from "../components/DetallePelicula/DetallePelicula";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <>
        <DetallePelicula id={id} />
      </>
    );
  }
}

export default Detalle;