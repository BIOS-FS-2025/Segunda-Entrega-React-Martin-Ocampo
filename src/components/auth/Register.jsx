import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Registrarse</h1>
          <p>Creá tu cuenta para continuar</p>
        </div>

        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
            />
          </div>

          <Link to="/login" className="login-link">
            <button type="button" className="register-button">
              Crear Cuenta
            </button>
          </Link>
        </form>

        <div className="register-footer">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="login-link">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
