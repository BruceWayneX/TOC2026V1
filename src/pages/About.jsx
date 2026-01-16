import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Sobre Nosotros</p>

        <h2>Sobre Nosotros</h2>

        <div className="about-layout">
          {/* MENÚ LATERAL */}
          <aside className="about-menu">
            <ul>
              <li className="active">Perfil</li>
              <li>Cuenta</li>
              <li>Notificaciones</li>
              <li className="danger">Cerrar sesión</li>
            </ul>
          </aside>

          {/* CONTENIDO */}
          <section className="about-content">
            <h3>Bienvenidos a TuOpinión Cuenta</h3>

            <p>
              TuOpinión Cuenta es una comunidad creada para que compartas tus
              experiencias y descubras lo mejor de cada lugar basado en
              opiniones reales de personas como tú.
            </p>

            <img
              src="/img/comunidad.jpg"
              alt="Comunidad TuOpinión Cuenta"
              className="about-image"
            />

            <div className="about-grid">
              <div className="about-card">
                <h4>💬 Nuestra Misión</h4>
                <p>
                  Brindar un espacio donde puedas compartir tus opiniones
                  honestas sobre restaurantes, tiendas, hoteles y más, para
                  ayudar a otros a tomar decisiones informadas.
                </p>
              </div>

              <div className="about-card">
                <h4>⭐ Nuestros Valores</h4>
                <ul>
                  <li>Honestidad y transparencia</li>
                  <li>Comunidad y colaboración</li>
                  <li>Calidad y confianza</li>
                </ul>
              </div>

              <div className="about-card">
                <h4>🤝 Nuestro Equipo</h4>
                <p>
                  Somos un equipo apasionado por conectar personas y lugares.
                  Trabajamos cada día para mejorar tu experiencia en nuestra
                  plataforma.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="about-cta">
              <p>
                Únete a nuestra comunidad y empieza a descubrir y compartir lo
                mejor de tu ciudad con TuOpinión Cuenta.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
