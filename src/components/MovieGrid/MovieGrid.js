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
        };
    }

    componentDidMount() {
        (this.props.movies && this.props.movies.length > 0)? 
        this.setState({
                movies: this.props.movies,})
            : 
            fetch(this.props.url)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        movies: data.results,
                    });
                })
                .catch((error) => console.log(error));
    }

    render() {
        const { movies } = this.state;
        const { verTodasLink, mostrarTodas } = this.props;

        return (
            <section className="card-container">
                {movies.length === 0 ? (
                    <Loader />
                ) : (
                    movies.map((movie, idx) =>
                        mostrarTodas ? (
                            <Pelicula
                                key={movie.id}
                                pelicula={movie}
                            />
                        ) : idx < 5 ? (
                            <Pelicula
                                key={movie.id}
                                pelicula={movie}
                            />
                        ) : null
                    )
                )}

                {mostrarTodas === false ? (
                    <Link to={verTodasLink}>
                        <button className="verTodas">Ver todas</button>
                    </Link>
                ) : null}

            </section>
        );
    }
}

export default MovieGrid;