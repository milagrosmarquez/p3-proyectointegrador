import Busqueda from "../components/Busqueda/Busqueda"
import "../index.css"
import MovieGrid from "../components/MovieGrid/MovieGrid"

const Home = (props) => {
    return (
        <>
            <h1>Metflix</h1>
            <Busqueda history= {props.history} />
            <h2>Cartelera⭐</h2>
            <MovieGrid url='https://api.themoviedb.org/3/movie/now_playing?api_key=ac8eace47b1cb77be341847000943da0'   verTodasLink="/Cartelera" mostrarTodas={false}/>
            <h2>Populares⭐</h2>
            <MovieGrid url='https://api.themoviedb.org/3/movie/popular?api_key=ac8eace47b1cb77be341847000943da0' verTodasLink="/Populares" mostrarTodas={false}/>
        </>
    )
}

export default Home
