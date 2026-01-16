export default function SimilarPlaceCard({ place }) {
    return (
      <div className="similar-card">
        <img src={place.image} alt={place.name} />
        <div>
          <h5>{place.name}</h5>
          <p>⭐⭐⭐⭐☆ {place.reviews}</p>
          <p className="location">📍 {place.location}</p>
          <span className="category">{place.category}</span>
        </div>
      </div>
    );
  }
  