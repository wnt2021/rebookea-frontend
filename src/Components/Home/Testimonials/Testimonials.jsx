import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        <div className="container" data-aos="fade-up" data-aos-delay="400">
          <div className="row">
            <div className="col-12 mb-5">
              <h3 className="testimonials-title text-center">Testimonios</h3>
              <div className="d-flex justify-content-center align-items-center">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={3}
                  autoplay={{ delay: 3000 }}
                  speed={1000}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="critic-review">
                      <div className="stars">
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                      </div>
                      <p>
                        Gracias a Rebookea vendí mis libros del primer año en
                        menos de una semana. Pude comprar los nuevos sin gastar
                        de más. ¡Recomendado al 100%!
                      </p>
                      <div className="critic-info">
                        <div className="critic-image">
                          <img
                            src="/images/person1.png"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="critic-data">
                          <span className="reviewer-name">Sofía Ramírez</span>
                          <p className="reviewer-job">
                            Estudiante de Psicología
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="critic-review">
                      <div className="stars">
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star-half-stroke icon-star"></i>
                      </div>
                      <p>
                        Tenía libros acumulando polvo. Ahora los intercambié por
                        otros que necesito. Es una idea muy útil y fácil de
                        usar.
                      </p>
                      <div className="critic-info">
                        <div className="critic-image">
                          <img
                            src="/images/person4.png"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="critic-data">
                          <span className="reviewer-name">Marcos Ortega</span>
                          <p className="reviewer-job">
                            Estudiante de Ingeniería
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="critic-review">
                      <div className="stars">
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                      </div>
                      <p>
                        Me encantó la plataforma. Me registré, subí mis libros y
                        al día siguiente ya tenía interesados. Me ayudó mucho
                        económicamente.
                      </p>
                      <div className="critic-info">
                        <div className="critic-image">
                          <img
                            src="/images/person2.png"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="critic-data">
                          <span className="reviewer-name">Valeria Muñoz</span>
                          <p className="reviewer-job">
                            Estudiante de Enfermería
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="critic-review">
                      <div className="stars">
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                        <i className="fa-solid fa-star icon-star"></i>
                      </div>
                      <p>
                        Antes los libros quedaban olvidados. Con Rebookea pude
                        vender algunos y ayudar a otros compañeros. ¡Ojalá
                        hubiera existido antes!
                      </p>
                      <div className="critic-info">
                        <div className="critic-image">
                          <img
                            src="/images/person3.png"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                        <div className="critic-data">
                          <span className="reviewer-name">Daniel Pérez</span>
                          <p className="reviewer-job">Estudiante de Derecho</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="rating-card">
                <h3 className="text-center rating-title">4.8</h3>
                <div className="stars justify-content-center">
                  <i className="fa-solid fa-star overall-star"></i>
                  <i className="fa-solid fa-star overall-star"></i>
                  <i className="fa-solid fa-star overall-star"></i>
                  <i className="fa-solid fa-star overall-star"></i>
                  <i className="fa-solid fa-star-half-stroke overall-star"></i>
                </div>
                <p className="text-center overall-description">
                  Basado en 450+ valoraciones
                </p>
                <div className="rating-platforms">
                  <span className="rating-text">Khan Academy</span>
                  <span className="rating-text">Manuel Peleteiro</span>
                  <span className="rating-text">UPC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
