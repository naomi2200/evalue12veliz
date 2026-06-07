import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link to="/">Inicio</Link>
      <Link to="/entities">Entities</Link>
    </nav>
  );
}

export default Navbar;