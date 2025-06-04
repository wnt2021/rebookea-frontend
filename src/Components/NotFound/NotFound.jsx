import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="custom-bg">
      <div className="text-dark">
        <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-2 fw-medium mt-4">Oops! Página no encontrada</p>
            <p className="mt-4 mb-5">La página que estás buscando no existe</p>
            <Link
              to="/"
              className="btn-notFound fw-semibold rounded-pill px-4 py-2 custom-btn"
            >
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
