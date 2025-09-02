import { useAuth } from "../../contexts/AuthContext";
import DarkMode from "../dark-mode/DarkMode";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <span className="navbar-logo">GeoTrip</span>
      <div className="navbar-user-section">
        {user && (
          <div className="user-info">
            <span className="user-name">Bienvenido, {user.name}</span>
            <button className="logout-button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        )}
        <div className="dark-mode">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
