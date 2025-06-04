import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Card({
  id,
  title,
  description,
  price,
  image,
  category,
  leftButtonText,
  rightButtonText,
  userId,
  isFavorited,
}) {
  const [favorited, setFavorited] = useState(isFavorited);
  const idUser = localStorage.getItem("userId");

  const toggleFavorite = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/favorites/${id}`,
        { idUser }
      );

      if (res.data.success) {
        setFavorited(!favorited);
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="card-body">
        <div className="book-image">
          <img className="img-fluid" src={image} alt={title} />
          <div className="category">{category}</div>
        </div>
        <div className="book-info p-3" key={id}>
          <h3>
            {title} - {price}€
          </h3>
          <p className="card-description">{description}</p>
          <div className="book-actions">
            <Link
              className="btn-chat d-flex"
              style={{ textDecoration: "none" }}
              onClick={toggleFavorite}
            >
              <i
                className={`${
                  favorited ? "fa-solid" : "fa-regular"
                } fa-star p-1`}
              ></i>{" "}
              {leftButtonText}
            </Link>
            <Link
              to="/checkout"
              style={{ textDecoration: "none" }}
              state={{
                id,
                title,
                price,
                image,
                userId,
              }}
              className="btn-details"
            >
              {rightButtonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
