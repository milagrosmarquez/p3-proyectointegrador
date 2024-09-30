import { Component } from "react";
import { Link } from 'react-router-dom';
import "./Search.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ query: event.target.value });
    }

    render() {
        return (
            <div className="busqueda">
                <form onSubmit={(event) => this.preventSubmit(event)}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Buscar Película <3"
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.query}
                    />
                    <Link to={`/Resultados/${this.state.query}`}>
                        <button type="button">🔎</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Search;