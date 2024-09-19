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
        <Route path="/favoritos" exact component= {Favoritos} />
        <Route path="/detalle/:id" exact component= {Detalle} />
        <Route path="/resultados/:query" exact component={SearchResults} />
        <Route path="/cartelera" exact component= {Cartelera} />
        <Route path="/populares" exact component={Populares} />
        <Route path="" component={NotFound} />
      </Switch>
     <Footer/>
    </>
  );
}

export default App;
