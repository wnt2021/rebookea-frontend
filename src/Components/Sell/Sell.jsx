import { useState } from "react";
import "./Sell.css";
import Card from "./Card/Card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import sellSchema from "../../Schemas/sellSchema.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";

function Sell() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNextStep = async () => {
    let currentField = "";
    if (step === 1) currentField = "title";
    if (step === 2) currentField = "description";
    if (step === 3) currentField = "price";
    if (step === 4) currentField = "image";
    if (step === 5) currentField = "category";

    const isValid = await trigger(currentField);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sellSchema),
  });

  const uploadBook = async (data) => {
    const userId = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);
    formData.append("category", data.category);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/save/${userId}`,
        formData
      );
      if (res.data.success) {
        setLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Error al registrar libro", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section className="sell-section">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-start mb-5">
                <h3 className="selling-title">
                  Lo que ya te ayudó a ti, puede ayudar a alguien más
                </h3>
              </div>
              <div className="col-lg-3 col-md-6 mt-3 d-flex">
                <Card
                  title="Encuentra tu libro olvidado"
                  description="Revisa tu estantería, mochila o cajón… seguro hay un libro que ya no usás y puede servirle a alguien más."
                  icon="fa-magnifying-glass"
                />
              </div>
              <div className="col-lg-3 col-md-6 mt-3 d-flex">
                <Card
                  title="Publicalo en Rebookea"
                  description="Subí una foto, contá de qué trata y poné el precio o si lo querés intercambiar. ¡Fácil y rápido!"
                  icon="fa-upload"
                />
              </div>
              <div className="col-lg-3 col-md-6 mt-3 d-flex">
                <Card
                  title="Esperá a que otros lo vean"
                  description="Tu libro estará visible para estudiantes que lo necesitan. Vas a recibir mensajes si alguien está interesado."
                  icon="fa-eye"
                />
              </div>
              <div className="col-lg-3 col-md-6 mt-3 d-flex">
                <Card
                  title="Vendé o intercambiá y ganá"
                  description="Cerrá el trato, ganá dinero o conseguí otro libro útil. ¡Así todos salimos ganando!"
                  icon="fa-money-bill"
                />
              </div>
              <form onSubmit={handleSubmit(uploadBook)}>
                <div className="col-lg-8 col-md-12 mt-5 col-sm-6 m-auto sell-card">
                  <h3 className="book-title">Información del libro</h3>
                  <p className="description-title">
                    Proporciona toda la información relevante
                  </p>
                  <input
                    placeholder="Título del Libro"
                    className="sell_input"
                    type="text"
                    name="title"
                    {...register("title")}
                  />
                  {step === 1 && (
                    <div className="col-12 d-flex justify-content-end">
                      <p className="continue-text" onClick={handleNextStep}>
                        Continuar
                      </p>
                    </div>
                  )}
                  {errors.title && (
                    <p className="text-center text-danger">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                {step >= 2 && (
                  <div className="col-lg-8 col-md-12 mt-5 col-sm-6 m-auto sell-card">
                    <h3 className="book-title">Descripción del libro</h3>
                    <p className="description-title">
                      Proporciona toda la información relevante
                    </p>
                    <input
                      placeholder="descripción del Libro"
                      className="sell_input"
                      type="text"
                      name="description"
                      {...register("description")}
                    />
                    {step === 2 && (
                      <div className="col-12 d-flex justify-content-end">
                        <p className="continue-text" onClick={handleNextStep}>
                          Continuar
                        </p>
                      </div>
                    )}
                    {errors.description && (
                      <p className="text-center text-danger">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                )}
                {step >= 3 && (
                  <div className="col-lg-8 col-md-12 mt-5 col-sm-6 m-auto sell-card">
                    <h3 className="book-title">Precio del libro</h3>
                    <p className="description-title">
                      Proporciona el precio del libro
                    </p>
                    <input
                      placeholder="Precio del Libro"
                      className="sell_input"
                      type="text"
                      name="price"
                      {...register("price")}
                    />
                    {step === 3 && (
                      <div className="col-12 d-flex justify-content-end">
                        <p className="continue-text" onClick={handleNextStep}>
                          Continuar
                        </p>
                      </div>
                    )}
                    {errors.price && (
                      <p className="text-center text-danger">
                        {errors.price.message}
                      </p>
                    )}
                  </div>
                )}
                {step >= 4 && (
                  <div className="col-lg-8 col-md-12 mt-5 col-sm-6 m-auto sell-card">
                    <h3 className="book-title">Imagen del libro</h3>
                    <p className="description-title">
                      Proporciona la imagen del libro
                    </p>
                    <input
                      placeholder="Imagen del Libro"
                      className="form-control mb-4"
                      type="file"
                      {...register("image")}
                    />
                    {step === 4 && (
                      <div className="col-12 d-flex justify-content-end">
                        <p className="continue-text" onClick={handleNextStep}>
                          Continuar
                        </p>
                      </div>
                    )}
                    {errors.image && (
                      <p className="text-center text-danger">
                        {errors.image.message}
                      </p>
                    )}
                  </div>
                )}
                {step >= 5 && (
                  <div className="col-lg-8 col-md-12 mt-5 col-sm-6 m-auto sell-card">
                    <h3 className="book-title">Categoría del libro</h3>
                    <p className="description-title">
                      Proporciona la categoría del libro
                    </p>
                    <select className="sell_input" {...register("category")}>
                      <option className="category_option">
                        Ciencias Sociales y Naturales
                      </option>
                      <option className="category_option">
                        Matemáticas y Estadística
                      </option>
                      <option className="category_option">
                        Lengua y Literatura
                      </option>
                      <option className="category_option">
                        Historia y Geografía
                      </option>
                      <option className="category_option">Arte y Diseño</option>
                      <option className="category_option">
                        Informática y Tecnología
                      </option>
                      <option className="category_option">
                        Economía y Empresa
                      </option>
                      <option className="category_option">Derecho</option>
                      <option className="category_option">
                        Psicología y Educación
                      </option>
                      <option className="category_option">
                        Medicina y Salud
                      </option>
                      <option className="category_option">
                        Ingeniería y Arquitectura
                      </option>
                      <option className="category_option">
                        Filosofía y Ética
                      </option>
                      <option className="category_option">Idiomas</option>
                      <option className="category_option">Religión</option>
                      <option className="category_option">
                        Física y química
                      </option>
                    </select>
                    <div className="col-3 d-flex ms-auto">
                      <button type="submit" className="finalize-btn">
                        <span>Finalizar</span>
                      </button>
                    </div>
                  </div>
                )}
                {errors.category && (
                  <p className="text-center text-danger">
                    {errors.category.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Sell;
