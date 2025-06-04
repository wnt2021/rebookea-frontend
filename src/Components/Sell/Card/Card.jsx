import "./Card.css";

function Card({ title, description, icon }) {
  return (
    <div className="services-item position-relative">
      <i className={`fa-solid ${icon} sell-icon`}></i>
      <h4 className="book-title">{title}</h4>
      <p className="sell-card-description">{description}</p>
    </div>
  );
}

export default Card;
