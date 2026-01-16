import "../styles/settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Configuración</p>

        <h2>Configuración</h2>

        <div className="settings-layout">
          {/* MENÚ LATERAL */}
          <aside className="settings-menu">
            <ul>
              <li>Perfil</li>
              <li className="active">Cuenta</li>
              <li>Notificaciones</li>
              <li className="danger">Cerrar sesión</li>
            </ul>
          </aside>

          {/* CONTENIDO */}
          <section className="settings-content">
            <h3>Editar cuenta</h3>

            <div className="user-info">
              <img src="/img/user1.jpg" alt="Sofia" />
              <div>
                <strong>Sofia</strong>
                <p>sofia@ejemplo.com</p>
                <button className="secondary">Cambiar foto</button>
              </div>
            </div>

            <form className="settings-form">
              <label>
                Nombre
                <input type="text" value="Sofia" readOnly />
              </label>

              <label>
                Email
                <input type="email" value="sofia@ejemplo.com" readOnly />
              </label>

              <label className="password-row">
                Contraseña
                <input type="password" value="********" readOnly />
                <span className="link">Cambiar contraseña</span>
              </label>

              <button className="primary">Guardar cambios</button>
            </form>

            <p className="login-link">
              ¿Ya tienes cuenta? <span>Iniciar sesión</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
