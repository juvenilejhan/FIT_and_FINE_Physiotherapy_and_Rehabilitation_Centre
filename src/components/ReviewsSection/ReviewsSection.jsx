import SectionTitle from "../SectionTitle/SectionTitle";
import "./ReviewsSection.css";

// A small helper to generate stars based on a rating number
function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="review-stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="star filled">
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection({ reviews }) {
  return (
    <section className="content-band" id="reviews">
      <SectionTitle
        eyebrow="রোগীদের মতামত"
        title="আমাদের রোগীরা কী বলেন"
        description="আমাদের সেবায় যারা সুস্থতা ফিরে পেয়েছেন, তাদের অনুভূতির কয়েকটি সত্যিকারের কথা।"
      />
      <div className="about-grid">
        {reviews.map((review) => (
          <div key={review.id} className="about-panel">
            <Stars rating={review.rating} />
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
