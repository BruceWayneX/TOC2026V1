import "../styles/help.css";

export default function Help() {
  const faqs = [
    "¿Cómo creo una cuenta en TuOpinión Cuenta?",
    "¿Es gratis usar TuOpinión Cuenta?",
    "¿Cómo puedo escribir una reseña?",
    "¿Puedo editar o eliminar mis reseñas?",
  ];

  return (
    <div className="help-page">
      <div className="help-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Ayuda y Preguntas Frecuentes</p>

        <h2>Ayuda y Preguntas Frecuentes</h2>

        <div className="help-layout">
          {/* MENÚ LATERAL */}
          <aside className="help-menu">
            <ul>
              <li className="active">Ayuda</li>
              <li>Cuenta</li>
              <li>Notificaciones</li>
            </ul>
          </aside>

          {/* CONTENIDO */}
          <section className="help-content">
            {/* BUSCADOR */}
            <div className="help-search">
              <input placeholder="Buscar preguntas..." />
              <button>Buscar</button>
            </div>

            <p className="help-description">
              Encuentra respuestas a las preguntas más comunes sobre TuOpinión
              Cuenta.
            </p>

            <h3>Preguntas Frecuentes</h3>

            <div className="faq-list">
              {faqs.map((question, index) => (
                <div key={index} className="faq-item">
                  <span>{question}</span>
                  <button>+</button>
                </div>
              ))}
            </div>

            <p className="help-note">
              En TuOpinión Cuenta nos esforzamos por mantener la calidad y
              confiabilidad de las reseñas, asegurándonos que sean útiles y
              veraces.
            </p>

            {/* CTA */}
            <div className="help-cta">
              <h4>¿Necesitas más ayuda?</h4>
              <p>
                Si no encuentras la respuesta que necesitas, puedes
                contactarnos y con gusto te ayudaremos.
              </p>
              <button>Contáctanos</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
