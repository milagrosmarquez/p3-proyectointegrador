import Busqueda from "../components/Busqueda/Busqueda"
import PelisCartelera from "../components/PelisCartelera/PelisCartelera"
import PelisPopulares from "../components/PelisPopulares/PelisPopulares"
import "../index.css"
import Loader from "../components/Loader/Loader"




const Home = (props) => {
    return (
        <>
            <h1>Metflix</h1>
            <Busqueda history= {this.props.history} />
            <h2>Cartelera⭐</h2>
            <PelisCartelera/>
            <h2>Populares</h2>
            <PelisPopulares/>
            <Loader/>
        </>
    )
}

export default Home
