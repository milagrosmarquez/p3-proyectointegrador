import MovieGrid from "../components/MovieGrid/MovieGrid"


const Populares = () => {
    return (
        <>
            <div>
                <h2>Populares</h2>
                
                <MovieGrid
                    url='https://api.themoviedb.org/3/movie/popular?api_key=ac8eace47b1cb77be341847000943da0'
                    filtered={true}
                    showAllLink="/Popular"
                    showAll={true}
                    loadMore={true}
                />
                
            </div>
        </>
    )
}

export default Populares