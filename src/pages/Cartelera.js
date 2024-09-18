import MovieGrid from "../components/MovieGrid/MovieGrid"

const Cartelera = () => {
    return (
        <>
            <div>
            <h2>Sección Cartelera</h2>
            <MovieGrid url='https://api.themoviedb.org/3/movie/now_playing?api_key=ac8eace47b1cb77be341847000943da0'   verTodasLink="/Cartelera" mostrarTodas={true}/>
            </div>
        </>
    )
}

export default Cartelera