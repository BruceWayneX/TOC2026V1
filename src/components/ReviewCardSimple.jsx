export default function ReviewCardSimple({ review }) {
    return (
      <div className="card review-card">
        <h4>{review.user}</h4>
        <p>{"⭐".repeat(review.rating)}</p>
        <p>{review.comment}</p>
      </div>
    );
  }
  