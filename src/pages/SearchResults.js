import { Component } from "react";
import Results from "../components/Results/Results";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    const query = this.props.match.params.query;
    
    return (
      <div>
        <h2>Resultados de búsqueda</h2>  
        <Results query={query} />
      </div>
    );
  }
}

export default SearchResults;