import { Component } from 'react';
import "./MovieGrid.css"
import Movie from "../Movie/Movie"
import Loader from "../Loader/Loader"
import { Link } from 'react-router-dom';

class MovieGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filteredMovies: [],
            filterValue: "",
            filterApplied: false,
            loading: true,
            page: 1
        };
    }

    componentDidMount() {
        (this.props.movies && this.props.movies.length > 0) ?
            this.setState({
                movies: this.props.movies,
                filteredMovies: this.props.movies,
                loading: false,
            })
            :
            fetch(`${this.props.url}&page=${this.state.page}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        movies: data.results,
                        filteredMovies: data.results,
                        loading: false,
                        page: this.state.page + 1
                    });
                })
                .catch((error) => console.log(error),
                    this.setState({ loading: false }));
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    handleFilterChange = (event) => {
        this.setState({ filterValue: event.target.value })
    }

    filter = () => {
        const { filterValue, movies } = this.state;
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(filterValue.toLowerCase())
        );
        this.setState({ filteredMovies, filterApplied: true });
    };

    loadMoreMovies = () => {
        fetch(`${this.props.url}&page=${this.state.page}`)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    movies: [...prevState.movies, ...data.results],
                    filteredMovies: [...prevState.filteredMovies, ...data.results],
                    page: prevState.page + 1
                }));
            })
            .catch(error => console.log(error));
    }

    render() {
        const { movies, loading, filteredMovies, filterApplied } = this.state;
        const { showAllLink, showAll, filtered, loadMore } = this.props;

        return (
            <div className="caja">
                <section className="filtro">
                    {filtered === true ? (
                        <form onSubmit={(event) => this.preventSubmit(event)}>
                            <input
                                type="text"
                                name="filterValue"
                                placeholder="Filter movies"
                                onChange={(event) => this.handleFilterChange(event)}
                                value={this.state.filterValue}
                            />
                            <button type="button" onClick={this.filter}>🎬</button>
                        </form>
                    ) : null}
                </section>
                <section className="card-container">
                    {loading ? (
                        <Loader />
                    ) : (
                        filterApplied === true && filteredMovies.length === 0 ? (
                            <p>No existen películas para este filtro</p>
                        ) : (
                            filterApplied === true ? (
                                filteredMovies.map((movie, idx) =>
                                    showAll ? (
                                        <Movie key={movie.id} movie={movie} />
                                    ) : idx < 5 ? (
                                        <Movie key={movie.id} movie={movie} />
                                    ) : null
                                )
                            ) : (
                                movies.length === 0 ? (
                                    <Loader />
                                ) : (
                                    movies.map((movie, idx) =>
                                        showAll ? (
                                            <Movie key={movie.id} movie={movie} />
                                        ) : idx < 5 ? (
                                            <Movie key={movie.id} movie={movie} />
                                        ) : null
                                    )
                                )
                            )
                        )
                    )}

                    {showAll === false && showAllLink ? (
                        <Link to={showAllLink}>
                            <button className="ver-todas">Ver todas</button>
                        </Link>
                    ) : null}

                    {loadMore === true && filterApplied === false ? (
                        <button className="ver-todas" onClick={this.loadMoreMovies}>Cargar más</button>
                    ) : null}
                </section>
                
            </div>
        );
    }
}

export default MovieGrid;