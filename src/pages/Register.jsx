import "../styles/register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        {/* LOGO */}
        <div className="register-header">
          <h2>TuOpinión Cuenta</h2>
        </div>

        {/* TEXTO */}
        <h3>Crear cuenta</h3>
        <p className="register-subtitle">
          Únete a TuOpinión Cuenta
        </p>

        {/* FORMULARIO */}
        <form className="register-form">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
          />

          <label>Confirmar contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
          />

          <button type="submit">Registrarse</button>
        </form>

        {/* LINK */}
        <p className="register-footer">
          ¿Ya tienes cuenta? <span>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}
