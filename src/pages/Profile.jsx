import "../styles/profile.css";

export default function Profile() {
  const reviews = [
    {
      id: 1,
      place: "Café Central",
      rating: 4.5,
      text:
        "¡Excelente café y ambiente! El lugar es muy acogedor y el cappuccino estuvo delicioso.",
      time: "Hace 2 días",
      image: "/img/cafe.jpg",
      location: "Bogotá, Colombia",
    },
    {
      id: 2,
      place: "Peluquería El Corte",
      rating: 5,
      text:
        "Servicio impecable. El corte de cabello quedó perfecto y el trato fue genial.",
      time: "Hace 1 semana",
      image: "/img/belleza.jpg",
      location: "Bogotá, Colombia",
    },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Inicio / Mi Perfil</p>

        {/* HEADER PERFIL */}
        <div className="profile-header">
          <div className="profile-user">
            <img src="/img/user1.jpg" alt="Sofia" />
            <div>
              <h2>Sofia</h2>
              <p>sofia@ejemplo.com</p>
              <p>🇨🇴 Colombia · 25 puntos</p>
            </div>
          </div>

          <button className="edit-btn">✏️ Editar perfil</button>
        </div>

        {/* CONTENIDO */}
        <div className="profile-layout">
          {/* MIS RESEÑAS */}
          <div className="profile-reviews">
            <h3>Mis Reseñas</h3>

            {reviews.map((review) => (
              <div key={review.id} className="profile-review-card">
                <img src={review.image} alt={review.place} />

                <div>
                  <h4>{review.place}</h4>
                  <p>⭐⭐⭐⭐☆ {review.rating}</p>
                  <p className="review-text">{review.text}</p>
                  <p className="review-meta">
                    📍 {review.location} · 👍 {review.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="profile-sidebar">
            <h4>Estadísticas</h4>
            <p>
              <strong>1</strong> Reseña total
            </p>
            <p>
              <strong>4.5</strong> Promedio calificación
            </p>
            <p>
              <strong>0</strong> Imágenes subidas
            </p>

            <h4 className="mt">Mis Reseñas</h4>

            <div className="mini-review">
              <img src="/img/cafe.jpg" alt="Café Central" />
              <div>
                <strong>Café Central</strong>
                <p>⭐⭐⭐⭐☆ 5</p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
