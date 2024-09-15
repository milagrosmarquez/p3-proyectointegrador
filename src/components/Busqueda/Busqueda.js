import { Component } from "react";
import "./Busqueda.css"

class Busqueda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: ""
        };
    }

    evitarSubmit(evento) {
        evento.preventDefault();
        console.log("Buscando:", this.state.valor); 
    }

    controlarCambios(evento) {
        this.setState({ valor: evento.target.value });
    }

    render() {
        return (
            <div className="Busqueda">
                <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input
                        type="text"
                        placeholder="Buscar Película <3"
                        onChange={(evento) => this.controlarCambios(evento)}
                        value={this.state.valor}
                    />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
        );
    }
}

export default Busqueda;