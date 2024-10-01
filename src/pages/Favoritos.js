import { Component } from "react";
import Loader from "../components/Loader/Loader";
import MovieGrid from "../components/MovieGrid/MovieGrid";

class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
            error: false,
        });

        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);

            Promise.all(
                parsedArray.map((id) => {
                    return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=ac8eace47b1cb77be341847000943da0`)
                        .then((response) => response.json())
                        .then((movie) => {
                            this.setState((prevState) => ({
                                movies: [...prevState.movies, movie],
                            }));
                        });
                })
            )
                .then(() => {
                    this.setState({
                        isLoading: false,
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                    });
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const { isLoading, error, movies } = this.state;
        return (
            <>
                <h1>Mis favoritos 💗</h1>
                <div>
                    {isLoading ? (
                        <Loader />
                    ) : error ? (
                        <p>Error al cargar las películas </p>
                    ) : movies.length === 0 ? (
                        <p>No tienes películas favoritas</p>
                    ) : (
                        <MovieGrid
                            movies={this.state.movies}
                            showAll={false}
                            filtered={false}
                        />
                    )}
                </div>
            </>
        );
    }
}

export default Favoritos;





