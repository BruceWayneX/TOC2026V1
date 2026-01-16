export default function ReviewCardDetail({ review }) {
    return (
      <div className="review-card">
        <div className="review-header">
          <img src={review.avatar} alt={review.user} />
          <div>
            <strong>{review.user}</strong>
            <p className="review-meta">
              ⭐⭐⭐⭐☆ · {review.time}
            </p>
          </div>
        </div>
  
        <p className="review-title">{review.title}</p>
        <p className="review-text">{review.text}</p>
  
        <div className="review-actions">
          <span>👍 Me gusta ({review.likes})</span>
          <span>Responder</span>
        </div>
      </div>
    );
  }
  