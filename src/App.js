import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import NotFound from "./pages/Notfound";
import Favoritos from "./pages/Favoritos";
import Detalle from "./pages/Detalle"
import SearchResults from "./pages/SearchResults"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/favoritos" component= {Favoritos} />
        <Route path="" component={NotFound} />
        <Route path="/pelicula/id/:id" component= {Detalle} />
        <Route path="/search" component={SearchResults} />
        <Route path="/cartelera" component= {Cartelera} />
        <Route path="/populares" component={Populares} />
      </Switch>
     <Footer/>
    </>
  );
}

export default App;
