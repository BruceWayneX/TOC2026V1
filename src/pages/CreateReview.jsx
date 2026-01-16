import "../styles/createReview.css";

export default function CreateReview() {
  return (
    <div className="review-page">
      <div className="review-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">
          Inicio / Lugares / Café Central / Publicar Reseña
        </p>

        {/* TÍTULO */}
        <h2>Publicar Reseña</h2>

        {/* INFO DEL LUGAR */}
        <div className="place-summary">
          <img src="/img/cafe.jpg" alt="Café Central" />
          <div>
            <h4>Café Central</h4>
            <p>⭐⭐⭐⭐☆ 4.5 · 128 reseñas · Bogotá, Colombia</p>
          </div>
        </div>

        <div className="review-layout">
          {/* FORMULARIO */}
          <div className="review-form">
            {/* ESTRELLAS (UI) */}
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <textarea
              placeholder="Escribe aquí tu opinión..."
              rows="4"
            ></textarea>

            {/* IMÁGENES */}
            <div className="images-box">
              <img src="/img/cafe1.jpg" alt="preview" />
              <img src="/img/cafe2.jpg" alt="preview" />
              <div className="upload">
                📷 Subir imágenes
              </div>
            </div>

            {/* USUARIO */}
            <div className="user-box">
              <img src="/img/user1.jpg" alt="Sofia" />
              <div>
                <strong>Sofia</strong>
                <p>sofia@ejemplo.com</p>
              </div>
            </div>

            {/* RESUMEN */}
            <div className="place-mini">
              <img src="/img/cafe.jpg" alt="Café Central" />
              <div>
                <strong>Café Central</strong>
                <p>⭐⭐⭐⭐☆ · Hace 1 semana</p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="review-sidebar">
            <h4>Estadísticas</h4>
            <p>
              <strong>1</strong> Reseña total
            </p>
            <p>
              <strong>4.5</strong> Promedio calificación
            </p>

            <button className="publish-btn">
              Publicar reseña
            </button>

            <p className="login-link">
              ¿Ya tienes cuenta? <span>Iniciar sesión</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
