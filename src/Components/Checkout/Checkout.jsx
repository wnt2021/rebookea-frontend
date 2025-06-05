import "./Checkout.css";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckoutSchema from "../../Schemas/CheckoutSchema.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const { id, title, price, image } = location.state;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CheckoutSchema),
  });

  const checkoutDone = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/bought/${id}`
      );
      if (res.data.success) {
        setLoading(true);
        boughtEmail(title, price, image);
        setTimeout(() => {
          navigate("/thanks");
        }, 1000);
      }
    } catch (error) {
      console.error("Ocurrio un error", error);
    }
  };

  const boughtEmail = async (title, price, image) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bought-email`,
        {
          title,
          price,
          image,
        }
      );
      console.log("Email enviado correctamente", res.data);
    } catch (error) {
      console.error("Error al enviar correo", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section className="h-100 h-custom checkout-section">
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card shopping-cart">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 px-5 py-4">
                        <h3 className="mb-5 pt-2 text-center fw-bold">
                          Tus libros
                        </h3>
                        <div
                          className="d-flex align-items-center mb-5"
                          key={id}
                        >
                          <div className="flex-shrink-0">
                            <img
                              src={image}
                              className="img-fluid"
                              style={{ width: "150px" }}
                              alt="Product"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="bookTxt">{title}</h5>
                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">{price}€</p>
                            </div>
                          </div>
                        </div>

                        <hr
                          className="mb-4"
                          style={{
                            height: "2px",
                            backgroundColor: "#f17c13",
                            opacity: 1,
                          }}
                        />
                        <div className="d-flex justify-content-between p-2 mb-2 bg-price text-white">
                          <h5 className="fw-bold mb-0">Total:</h5>
                          <h5 className="fw-bold mb-0">{price}€</h5>
                        </div>
                      </div>

                      <div className="col-lg-6 px-5 py-4">
                        <h3 className="mb-5 pt-2 text-center fw-bold">
                          Detalles de tu tarjeta
                        </h3>

                        <form
                          className="mb-5"
                          onSubmit={handleSubmit(checkoutDone)}
                        >
                          <div className="form-outline mb-3">
                            <label htmlFor="cardNumber" className="form-label">
                              Número de tarjeta
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              className="input-checkout"
                              placeholder="1234 5678 9012 3457"
                              {...register("cardNumber")}
                            />
                          </div>
                          {errors.cardNumber && (
                            <p className="text-center text-danger">
                              {errors.cardNumber.message}
                            </p>
                          )}
                          <div className="form-outline mb-2">
                            <label htmlFor="cardName" className="form-label">
                              Nombre en la tarjeta
                            </label>
                            <input
                              type="text"
                              id="cardName"
                              className="input-checkout"
                              placeholder="John Smith"
                              {...register("name")}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-center text-danger">
                              {errors.name.message}
                            </p>
                          )}
                          <div className="row">
                            <div className="col-md-6 mb-5">
                              <div className="form-outline">
                                <label
                                  htmlFor="expiration"
                                  className="form-label"
                                >
                                  Fecha de expiración
                                </label>
                                <input
                                  type="text"
                                  id="expiration"
                                  className="input-checkout"
                                  placeholder="01/22"
                                  {...register("expiryDate")}
                                />
                              </div>
                              {errors.expiryDate && (
                                <p className="text-center text-danger">
                                  {errors.expiryDate.message}
                                </p>
                              )}
                            </div>
                            <div className="col-md-6 mb-5">
                              <div className="form-outline">
                                <label htmlFor="cvv" className="form-label">
                                  CVV
                                </label>
                                <input
                                  type="password"
                                  id="cvv"
                                  className="input-checkout"
                                  placeholder="123"
                                  {...register("cvv")}
                                />
                              </div>
                              {errors.cvv && (
                                <p className="text-center text-danger">
                                  {errors.cvv.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn-checkout-bg btn-block btn-lg w-100"
                          >
                            Realizar pago
                          </button>

                          <h5 className="fw-bold mt-4">
                            <Link to="/wall" className="return">
                              <i className="fas fa-angle-left me-2"></i>Seguir
                              buscando
                            </Link>
                          </h5>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Checkout;
