import { Component } from 'react';
import "./MovieGrid.css"
import Pelicula from "../Pelicula/Pelicula"
import Loader from "../Loader/Loader"
import { Link } from 'react-router-dom';

class MovieGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            moviesFiltradas: [],
            filterValue: "",
            filtroAplicado: false,
            cargando: true,
            cargarMasPeliculas: false,
            page: 1
        };
    }

    componentDidMount() {
        (this.props.movies && this.props.movies.length > 0) ?
            this.setState({
                movies: this.props.movies,
                moviesFiltradas: this.props.movies,
                cargando: false,
            })
            :
            fetch(`${this.props.url}&page=${this.state.page}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        movies: data.results,
                        moviesFiltradas: data.results,
                        cargando: false,
                        page: this.state.page + 1
                    });
                })
                .catch((error) => console.log(error),
                    this.setState({ cargando: false }));
    }


    evitarSubmit(evento) {
        evento.preventDefault();
        console.log("Filtrando..");

    }

    handleFilterChange = (evento) => {
        this.setState({ filterValue: evento.target.value })
    }

    filtro = () => {
        const { filterValue, movies } = this.state;
        const moviesFiltradas = movies.filter((movie) =>
            movie.title.toLowerCase().includes(filterValue.toLowerCase())
        );
        this.setState({ moviesFiltradas, filtroAplicado: true });
    };

    cargarMasPeliculas =() => {
       fetch(`${this.props.url}&page=${this.state.page}`)
       .then(response => response.json())
       .then(data => {
        this.setState(prevState => ({
            movies: [...prevState.movies, ...data.results], 
            moviesFiltradas: [...prevState.moviesFiltradas, ...data.results],  
            page: prevState.page + 1 
        }));
    })
    .catch(error => console.log(error));

    }
       


    render() {
        const { movies, cargando, moviesFiltradas, filtroAplicado } = this.state;
        const { verTodasLink, mostrarTodas, filtrado, cargarMas } = this.props;

        return (
        
        <div className="caja">
            <section className="filtro">
                {filtrado === true ? (
                    <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                        <input
                            type="text"
                            name="filterValue"
                            placeholder="Filtrar películas"
                            onChange={(evento) => this.handleFilterChange(evento)}
                            value={this.state.filterValue}
                        />
                        <button type="button" onClick={this.filtro}>📽️</button>
                    </form>

                ) : null}
            
            </section>
            <section className="card-container">
                {cargando ? (
                    <Loader />
                ) : (
                    filtroAplicado === true && moviesFiltradas.length === 0 ? (
                        <p>No existen películas para este filtro </p>
                    ) : (
                        filtroAplicado === true ? (
                            moviesFiltradas.map((movie, idx) =>
                                mostrarTodas ? (
                                    <Pelicula key={movie.id} pelicula={movie} />
                                ) : idx < 5 ? (
                                    <Pelicula key={movie.id} pelicula={movie} />
                                ) : null
                            )
                        ) : (
                            movies.length === 0 ? (
                                <Loader />
                            ) : (
                                movies.map((movie, idx) =>
                                    mostrarTodas ? (
                                        <Pelicula key={movie.id} pelicula={movie} />
                                    ) : idx < 5 ? (
                                        <Pelicula key={movie.id} pelicula={movie} />
                                    ) : null
                                )
                            )
                        )
                    )
                )}

                {mostrarTodas === false ? (
                    <Link to={verTodasLink}>
                        <button className="verTodas">Ver todas</button>
                    </Link>
                ) : null}

                {cargarMas === true && filtroAplicado === false ?(
                      <button className="verTodas" onClick={this.cargarMasPeliculas}>Cargar más</button>
                ): null}
                

            </section>
            </div>
        );
    }
}

export default MovieGrid;