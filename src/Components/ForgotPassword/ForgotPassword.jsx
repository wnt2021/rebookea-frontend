import "./ForgotPassword.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import forgotSchema from "../../Schemas/forgotSchema";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ForgotPassword() {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const recoverPassword = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/recover`,
        data,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        localStorage.setItem("userId", res.data.user._id);
        recoverEmail(res.data.user.name);
        toast("Te hemos enviado un mensaje a tu correo!");
      }
    } catch (error) {
      if (error.response && error.response.data.exists) {
        setError("Esta cuenta no existe");
      } else {
        console.error("Error al registrar al usuario", error);
        setError("Ocurrio un error inesperado");
      }
    }
  };

  const recoverEmail = async (name) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/forgot`,
        {
          name,
        }
      );
      console.log("Email enviado correctamente", res.data);
    } catch (error) {
      console.error("Error al enviar correo", error);
    }
  };

  return (
    <section id="forgot" className="forgot">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <form
              className="form_container"
              onSubmit={handleSubmit(recoverPassword)}
            >
              <div className="title_container">
                <p className="title">Recupera tu contraseña con solo un clic</p>
                <span className="subtitle">
                  No te preocupes si olvidaste tu constraseña con solo unos
                  pasos la podrás recuperar
                </span>
              </div>
              <br />
              <div className="input_container">
                <label className="input_label" htmlFor="email_field">
                  Email
                </label>
                <i className="fa-solid fa-envelope icon"></i>
                <input
                  placeholder="name@mail.com"
                  type="text"
                  className="input_field"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-center text-danger">
                  {errors.email.message}
                </p>
              )}
              {error && <p className="text-center text-danger">{error}</p>}
              <button
                title="Sign In"
                type="submit"
                className="sign-in_btn mb-4"
              >
                <span>Recuperar contraseña</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        toastStyle={{ backgroundColor: "#07bc0c", color: "#ffff" }}
      />
    </section>
  );
}

export default ForgotPassword;
