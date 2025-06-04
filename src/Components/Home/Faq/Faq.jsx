import "./Faq.css";

function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="faq-title">
              ¿Tienes una pregunta? Mira la sección de FAQ
            </h3>
            <p className="faq-description">
              Hemos reunido las dudas más comunes para ayudarte a resolver
              cualquier pregunta rápidamente. Si no encuentras lo que buscas,
              ¡no dudes en contactarnos!
            </p>
          </div>

          <div
            className="col-lg-6 col-md-12 col-sm-12"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿Puedo intercambiar libros en lugar de venderlos?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sí. Al publicar, puedes elegir si quieres vender,
                    intercambiar o ambas opciones. Así puedes decidir lo que más
                    te convenga.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Rebookea cobra alguna comisión por venta o intercambio?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    No, el uso de Rebookea es completamente gratuito. Solo
                    conectamos estudiantes; tú gestionas el acuerdo directamente
                    con la otra persona.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Qué pasa si nadie quiere mi libro?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Te recomendamos ajustar el precio o buscar un posible
                    intercambio. También puedes destacar tu publicación o
                    compartirla con otros estudiantes.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    ¿Puedo comprar libros sin publicar los míos?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    ¡Claro! Puedes buscar y contactar a otros usuarios aunque no
                    publiques libros propios. La plataforma está abierta para
                    todos los estudiantes registrados.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    ¿Cómo contacto a alguien para hacer el intercambio o la
                    compra?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Dentro de la plataforma puedes enviar mensajes privados a
                    otros usuarios para acordar el punto de entrega, pago o tipo
                    de intercambio.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed accordion-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    ¿Cómo empiezo a usar Rebookea?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Primero crea una cuenta gratis con tu correo. Luego podrás
                    publicar los libros que ya no usas o buscar los que
                    necesitas para tus próximos cursos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
