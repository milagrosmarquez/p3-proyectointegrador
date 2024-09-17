import { Component } from "react";
import Loader from "../components/Loader/Loader";

class Favoritos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);

            Promise.all(
                parsedArray.map((id) => {
                    return fetch(URL)
                        .then((response) => response.json())
                        .then((movie) => {
                            this.setState((prevState) => ({
                                movies: [...prevState.movies, movie],
                            }));
                        });
                })
            ).then(() => {
                this.setState({
                    isLoading: false,
                });
            });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        return (
            <>
                <h1>Mis favoritos 💕</h1>
                <div>
                    {this.state.isLoading ?
                       <Loader/> : "grilla"}
                </div>
            </>
        );
    }
}

export default Favoritos;





