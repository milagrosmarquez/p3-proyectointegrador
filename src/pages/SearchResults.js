import { Component } from "react";
import Resultados from "../components/Resultados/Resultados";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    const query = this.props.match.params.query;
    
    return (
      <div>
        <h2>Resultados de búsqueda</h2>  
        <Resultados query={query} />
      </div>
    );
  }
}

export default SearchResults;