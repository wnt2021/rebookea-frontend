import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div
            className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <h1 className="hero-title">Dale una segunda vida a tus libros</h1>
            <p>
              Conecta con otros estudiantes, encuentra los libros que necesitas
              y dale un nuevo uso a los que ya no usas.
            </p>
            <div className="d-flex">
              <Link to="/login" className="btn-started">
                Dale vida a tus libros
              </Link>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2" data-aos="zoom-out">
            <div className="book-cover">
              <img
                src="/images/book.png"
                className="img-fluid book-img"
                alt="Book cover"
              />
              <div className="book-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
