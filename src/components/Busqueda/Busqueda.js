import { Component } from "react";
import "./Busqueda.css"

class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    evitarSubmit(evento) {
        evento.preventDefault();
        console.log("Buscando:", this.state.query);
    }

    controlarCambios(evento) {
        this.setState({ query: evento.target.value });
    }

    render() {
        return (
            <div className="Busqueda">
                <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input
                        type="text"
                        name="query"
                        placeholder="Buscar Película <3"
                        onChange={(evento) => this.controlarCambios(evento)}
                        value={this.state.query}
                    />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
        );
    }
}

export default Busqueda;
