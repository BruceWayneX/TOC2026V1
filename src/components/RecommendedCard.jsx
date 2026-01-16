export default function RecommendedCard({ item }) {
    return (
      <div className="card recommended-card">
        <img src={item.image} alt={item.name} loading="lazy"
          decoding="async"
        />
        <h4>{item.name}</h4>
        <p>{item.reviews} reseñas</p>
      </div>
    );
  }
  