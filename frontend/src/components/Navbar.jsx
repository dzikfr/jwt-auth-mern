import { Link } from 'react-router-dom';

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token saat logout
    window.location.href = '/login'; // Arahkan ke halaman login
  };

  return (
    <nav>
      <h1>MERN Auth</h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
