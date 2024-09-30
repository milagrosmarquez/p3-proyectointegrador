import { Component } from "react";
import "./Busqueda.css"
import { Link } from 'react-router-dom';


class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    evitarSubmit(evento) {
        evento.preventDefault();
    }

    controlarCambios(evento) {
        this.setState({ query: evento.target.value });
    }

    render() {
        return (
            <div className="busqueda">
                <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Buscar Película <3"
                        onChange={(evento) => this.controlarCambios(evento)}
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

export default Busqueda;
