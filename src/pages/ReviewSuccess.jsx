import "../styles/reviewSuccess.css";

export default function ReviewSuccess() {
  return (
    <div className="success-page">
      <div className="success-container">
        {/* MENSAJE PRINCIPAL */}
        <div className="success-header">
          <h1>¡Gracias por tomarte el tiempo de compartir tu experiencia!</h1>
          <p>
            Estamos agradecidos por tu feedback, tu opinión es importante.
          </p>
        </div>

        {/* LUGAR */}
        <div className="place-box">
          <img src="/img/zara.jpg" alt="ZARA" />
          <h3>ZARA</h3>
        </div>

        {/* ESTADO */}
        <div className="status-box">
          <span className="check">✔</span>
          <p>
            <strong>Tu reseña está pendiente.</strong> Leer más
          </p>
        </div>

        {/* RESEÑA PUBLICADA */}
        <div className="review-published">
          <div className="review-user">
            <img src="/img/user3.jpg" alt="Fernando Torres" />
            <div>
              <strong>Fernando Torres</strong>
              <p>4 reseñas · ES</p>
            </div>
          </div>

          <h4>Podría ser mejor</h4>
          <p className="review-text">
            Me gustó la ropa pero creo que la calidad podría ser mejor.
          </p>

          <div className="review-meta">
            <span>7 enero 2026</span>
            <span>Reseña espontánea</span>
          </div>

          <div className="review-actions">
            <button>Editar</button>
            <button className="danger">Eliminar</button>
          </div>
        </div>

        {/* SUGERENCIAS */}
        <section className="suggestions">
          <h3>Lugares que quieren recibir tu opinión</h3>

          <div className="suggestions-grid">
            <div className="suggestion-card">
              <img src="/img/kiwi.jpg" alt="Kiwi.com" />
              <p>Kiwi.com</p>
              <span>Hace 4 semanas</span>
              <button>Dejar reseña</button>
            </div>

            <div className="suggestion-card">
              <img src="/img/airhelp.jpg" alt="AirHelp" />
              <p>AirHelp</p>
              <span>Hace 8 meses</span>
              <button>Dejar reseña</button>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="cta-box">
          <h3>TuOpinión Cuenta también quiere saber más de ti</h3>
          <p>
            Deja otra reseña en TuOpinión Cuenta y sigue ayudando a nuestra
            comunidad a descubrir los mejores lugares.
          </p>
          <button>Escribe otra reseña</button>
        </div>
      </div>
    </div>
  );
}
