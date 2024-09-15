import {Link} from "react-router-dom"

const Header = () => {
    return (
      <header>
        <div className="logo">
          <h1>Metflix</h1> 
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;