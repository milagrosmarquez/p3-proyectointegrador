import { Component } from 'react';
import "./Pelicula.css"

class MovieGrid extends Component {
    render() {
        const { movies } = this.props;

        return (
            <div>
                {movies == null ? (
                    <Loader />
                ) : (
                    movies.map((movie, idx) =>
                        idx < 5 ? (
                            <Pelicula
                                key={movie.id}
                                title={movie.original_title}
                                desc={movie.overview}
                                img={movie.backdrop_path}
                                id={movie.id}
                            />
                        ) : null
                    )
                )}
            </div>
        );
    }
}
export default MovieGrid;