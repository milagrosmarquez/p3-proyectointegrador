import MovieGrid from "../components/MovieGrid/MovieGrid"


const Populares = () => {
    return (
        <>
            <div>
            <h2>Sección Populares</h2>   
            <MovieGrid url='https://api.themoviedb.org/3/movie/popular?api_key=ac8eace47b1cb77be341847000943da0' filtrado={true} verTodasLink="/Populares" mostrarTodas={true} cargarMas={true} />
            </div>
        </>
    )
}

export default Populares