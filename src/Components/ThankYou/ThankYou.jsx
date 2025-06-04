import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  return (
    <section className="thankYou">
      <div className="container">
        <div className="row">
          <div className="col-12 heightContainer d-flex justify-content-center align-items-center">
            <div className="text-center mt-5 mb-5">
              <i class="fa-regular fa-circle-check check mb-5"></i>

              <h3 className="thankyoutext mb-3">
                Gracias por confiar en Rebookea!
              </h3>
              <p className="text-muted mb-4 fs-5">
                Te hemos enviado un correo de confirmación con los detalles de
                tu compra.
              </p>
              <Link to="/wall" className="btn-upload mt-3">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
