import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="logo">
        <li><img src="./img/user.jpg" alt="Logo" /> </li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Header;