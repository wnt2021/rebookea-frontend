import "./RecoverPassword.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import recoverSchema from "../../Schemas/recoverSchema.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecoverPassword() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(recoverSchema),
  });

  const resetPassword = async (data) => {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/reset/${userId}`,
        data
      );
      if (res.data.success) {
        setLoading(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("Error al registrar al usuario", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section id="recover" className="recover">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <form
                  className="form_container"
                  onSubmit={handleSubmit(resetPassword)}
                >
                  <div className="title_container">
                    <p className="title">Restablece tu constraseña</p>
                    <span className="subtitle">
                      Pon una nueva contraseña y recuerda que no se te olvide
                    </span>
                  </div>
                  <br />
                  <div className="input_container">
                    <label className="input_label" htmlFor="email_field">
                      Contraseña
                    </label>
                    <i className="fa-solid fa-envelope icon"></i>
                    <input
                      placeholder="Contraseña"
                      type="password"
                      className="input_field"
                      {...register("password")}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-center text-danger">
                      {errors.password.message}
                    </p>
                  )}
                  <div className="input_container">
                    <label className="input_label" htmlFor="email_field">
                      Confirmar Contraseña
                    </label>
                    <i className="fa-solid fa-envelope icon"></i>
                    <input
                      placeholder="Confirmar contraseña"
                      type="password"
                      className="input_field"
                      {...register("passwordConfirmation")}
                    />
                  </div>
                  {errors.passwordConfirmation && (
                    <p className="text-center text-danger">
                      {errors.passwordConfirmation.message}
                    </p>
                  )}
                  <button
                    title="Sign In"
                    type="submit"
                    className="sign-in_btn mb-4"
                  >
                    <span>Restablecer contraseña</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default RecoverPassword;
