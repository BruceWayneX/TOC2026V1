import "../styles/login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        {/* LOGO */}
        <div className="login-header">
          <h2>TuOpinión Cuenta</h2>
        </div>

        {/* TEXTO */}
        <h3>Bienvenido de nuevo</h3>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        {/* FORMULARIO */}
        <form className="login-form">
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

          <button type="submit">Iniciar sesión</button>
        </form>

        {/* LINK */}
        <p className="login-footer">
          ¿No tienes cuenta? <span>Crear cuenta</span>
        </p>
      </div>
    </div>
  );
}
