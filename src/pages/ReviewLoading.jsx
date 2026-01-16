import "../styles/reviewLoading.css";

export default function ReviewLoading() {
  return (
    <div className="loading-page">
      <div className="loading-container">
        {/* LOGO */}
        <div className="loading-logo">
          <img src="/img/logo.png" alt="TuOpinión Cuenta" />
          <h2>TuOpinión Cuenta</h2>
        </div>

        {/* TEXTO */}
        <p className="loading-text">Enviando reseña...</p>

        {/* BARRA DE CARGA */}
        <div className="progress-wrapper">
          <div className="progress-bar" />
          <div className="pencil" />
        </div>
      </div>
    </div>
  );
}
