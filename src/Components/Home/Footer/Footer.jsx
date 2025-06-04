import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h3 className="logo footer-title">REBOOKEA</h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <span className="footer-motto">
              Rebookea: donde tus libros siguen su camino y tú sigues creciendo.
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center gap-1">
            <p className="social-links">
              <i class="fa-brands fa-x-twitter"></i>
            </p>
            <p className="social-links">
              <i class="fa-brands fa-facebook"></i>
            </p>
            <p className="social-links">
              <i class="fa-brands fa-instagram"></i>{" "}
            </p>
            <p className="social-links">
              <i class="fa-brands fa-tiktok"></i>{" "}
            </p>
          </div>
          <div className="col-12 mt-2">
            <hr />
          </div>
          <div className="col-12 copyright">
            <p className="text-center">
              Copyright <strong>REBOOKEA</strong> todos los derechos reservados
            </p>
          </div>
          <div className="col-12 copyright">
            <p className="text-center">
              Diseñado por <strong className="author">Wintop Adedokun</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
