import Busqueda from "../components/Busqueda/Busqueda"
import PelisCartelera from "../components/PelisCartelera/PelisCartelera"
import PelisPopulares from "../components/PelisPopulares/PelisPopulares"
import "../index.css"

const Home = () => {
    return (
        <>
            <h1>Metflix</h1>
            <Busqueda/>
            <h2>Cartelera⭐</h2>
            <PelisCartelera/>
            <h2>Populares</h2>
            <PelisPopulares/>
        </>
    )
}

export default Home
