import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-player">Add New Player</Link>
    </nav>
  );
}

export default NavBar;