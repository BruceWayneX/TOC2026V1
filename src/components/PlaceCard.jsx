export default function PlaceCard({ place }) {
    return (
      <div className="place-card">
        <div className="place-info">
          <h4>{place.name}</h4>
  
          <p className="rating">
            ⭐⭐⭐⭐☆ <span>{place.reviews}</span>
          </p>
  
          <p className="location">📍 {place.location}</p>
  
          <span className="category-tag">{place.category}</span>
        </div>
  
        <div className="place-image">
          <img
            src={place.image}
            alt={place.name}
            loading="lazy"
            decoding="async"
          />
          <span className="see-more">Ver más</span>
        </div>
      </div>
    );
  }
  