import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Favoritos from "./pages/Favoritos";
import Detalle from "./pages/Detalle"
import Busqueda from "./pages/Busqueda"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/favoritos" component= {Favoritos} />
        <Route path="" component={NotFound} />
        <Route path="/pelicula/id/:id" component= {Detalle} />
        <Route path="/busqueda" component={Busqueda} />
      </Switch>
     <Footer/>
    </>
  );
}

export default App;
