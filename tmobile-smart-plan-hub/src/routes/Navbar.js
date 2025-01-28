import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plans">Plan Finder</Link></li>
        <li><Link to="/store-finder">Store Locator</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;