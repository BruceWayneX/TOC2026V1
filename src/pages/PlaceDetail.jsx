import "../styles/placeDetail.css";
import ReviewCard from "../components/ReviewCard";
import SimilarPlaceCard from "../components/SimilarPlaceCard";

export default function PlaceDetail() {
  const reviews = [
    {
      id: 1,
      user: "Sofia",
      avatar: "/img/user1.jpg",
      title: "¡Excelente café y ambiente!",
      text:
        "El lugar es muy acogedor y el capuchino estuvo delicioso. Volveré pronto.",
      time: "hace 2 días",
      likes: 15,
    },
    {
      id: 2,
      user: "Luis M.",
      avatar: "/img/user2.jpg",
      title: "Muy buen café",
      text:
        "Buen ambiente para trabajar, internet rápido y excelente atención.",
      time: "hace 1 semana",
      likes: 8,
    },
  ];

  const similarPlaces = [
    {
      id: 1,
      name: "El Rinconcito",
      reviews: 54,
      location: "Medellín, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante3.jpg",
    },
    {
      id: 2,
      name: "Patio del Sabor",
      reviews: 44,
      location: "Cartagena, Colombia",
      category: "Restaurantes",
      image: "/img/restaurante4.jpg",
    },
  ];

  return (
    <div className="place-detail-page">
      <div className="place-detail-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">
          Inicio / Lugares / Café Central
        </p>

        {/* HEADER */}
        <div className="place-header">
          <div>
            <h2>Café Central</h2>
            <p className="rating">
              ⭐⭐⭐⭐☆ 4.5 · 128 reseñas
            </p>
            <p className="location">📍 Bogotá, Colombia</p>
          </div>

          <div className="place-actions">
            <button className="secondary">✍ Escribir reseña</button>
            <button className="primary">🔗 Compartir</button>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <img
          className="main-image"
          src="/img/cafe.jpg"
          alt="Café Central"
        />

        <div className="content">
          {/* RESEÑAS */}
          <div className="reviews">
            <h3>Reseñas</h3>

            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

            {/* PAGINACIÓN (UI) */}
            <div className="pagination">
              <button>{"<"}</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>{">"}</button>
            </div>
          </div>

          {/* SIMILARES */}
          <div className="similar">
            <h4>Lugares similares</h4>

            {similarPlaces.map((place) => (
              <SimilarPlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
