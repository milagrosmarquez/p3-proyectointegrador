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
        fetch(this.props.url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results,
                });
                console.log(data);
            })
            .catch((error) => console.log(error));
    }

    render() {
        const { movies } = this.state;
        const { verTodasLink } = this.props;

        return (
            <section className="card-container">
                {movies.length === 0 ? (
                    <Loader />
                ) : (
                    movies.map((movie, idx) =>
                        idx < 5 ? (
                            <Pelicula
                                key={movie.id}
                                pelicula={movie}
                            />
                        ) : null
                    )
                )}

            <Link to={verTodasLink}>
              <button className="verTodas">Ver todas</button>
            </Link>

            </section>
        );
    }
}

export default MovieGrid;