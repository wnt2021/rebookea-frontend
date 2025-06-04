import "./Features.css";

function Features() {
  return (
    <section id="features" className="features section">
      <div
        className="container section-title"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="features-title">¿Qué ganas con esto?</h2>
        <p className="text-center features-description">
          Descubre todo lo que puedes ganar con esta plataforma.
        </p>
      </div>
      <div className="container mt-5" data-aos="zoom-in" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4">
            <div
              className="feature-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <i className="fa-solid fa-money-bill card-icon"></i>
              </div>
              <h3>Ahorra dinero</h3>
              <p>
                Evita gastar en libros nuevos cada semestre. Vende o Intercambia
                con otros estudiantes y consigue lo que necesitas sin afectar tu
                bolsillo. Ideal para quienes quieren estudiar sin arruinarse en
                el intento.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="feature-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <i className="fa-solid fa-lightbulb card-icon"></i>
              </div>
              <h3>Recupera parte de lo que invertiste</h3>
              <p>
                ¿Terminaste el curso? No dejes que ese libro se llene de polvo.
                Con esta plataforma puedes venderlo o intercambiarlo, y así
                recuperar algo del dinero que gastaste. Es una forma inteligente
                de aprovechar tus recursos.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <i className="fa-solid fa-book card-icon"></i>
              </div>
              <h3>Libera espacio, no acumules libros sin uso</h3>
              <p>
                Evita gastar en libros nuevos cada semestre. Intercambia con
                otros estudiantes y consigue lo que necesitas sin afectar tu
                bolsillo. Ideal para quienes quieren estudiar sin arruinarse en
                el intento.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-12 text-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="feature-chapters">
              <h3 className="chapters-title">Cómo funciona</h3>
              <div className="chapters-grid">
                <div className="chapter-item">
                  <span className="chapter-number">01</span>
                  <h4 className="chapter-title">
                    Identifica tus libros sin uso
                  </h4>
                  <p className="chapter-text">
                    Revisa qué libros ya no necesitas porque ya cursaste esas
                    materias. ¡Esos son los candidatos perfectos para Rebookea!
                  </p>
                </div>
                <div className="chapter-item">
                  <span className="chapter-number">02</span>
                  <h4 className="chapter-title">Regístrate en Rebookea</h4>
                  <p className="chapter-text">
                    Crea tu cuenta en pocos pasos y únete a una comunidad de
                    estudiantes que, como tú, buscan dar un mejor uso a sus
                    libros.
                  </p>
                </div>
                <div className="chapter-item">
                  <span className="chapter-number">03</span>
                  <h4 className="chapter-title">
                    Publica tu libro o encuentra uno
                  </h4>
                  <p className="chapter-text">
                    Sube la información de tu libro para venderlo o
                    intercambiarlo. También puedes buscar libros que necesites
                    para tus próximos cursos.
                  </p>
                </div>
                <div className="chapter-item">
                  <span className="chapter-number">04</span>
                  <h4 className="chapter-title">Intercambia, vende y gana</h4>
                  <p className="chapter-text">
                    Concreta el intercambio o la venta. Así recuperas parte de
                    tu inversión, ayudas a otros y mantienes tus libros en
                    circulación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
