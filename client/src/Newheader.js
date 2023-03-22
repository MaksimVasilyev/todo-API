import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>To Do List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;