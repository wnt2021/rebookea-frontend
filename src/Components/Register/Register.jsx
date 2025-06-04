import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../Schemas/registerSchema.jsx";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading/Loading.jsx";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerUser = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        data,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setLoading(true);
        welcomeEmail(res.data.user.name);
        localStorage.setItem("userId", res.data.user._id);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data.exists) {
        setError("Esta cuenta ya esta registrada");
      } else {
        console.error("Error al registrar al usuario", error);
        setError("Ocurrio un error inesperado");
      }
    }
  };

  const welcomeEmail = async (name) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/welcome`,
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
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section id="register" className="register">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <form
                  className="form_container"
                  onSubmit={handleSubmit(registerUser)}
                >
                  <div className="title_container">
                    <p className="title">¡Únete a la comunidad Rebookea!</p>
                    <span className="subtitle">
                      Crea tu cuenta en segundos y empieza a vender,
                      intercambiar o encontrar los libros que necesitas para tus
                      cursos.
                    </span>
                  </div>
                  <br />
                  <div className="input_container">
                    <label className="input_label" htmlFor="email_field">
                      Pon tu nombre
                    </label>
                    <i className="fa-solid fa-envelope icon"></i>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="input_field"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-center text-danger">
                      {errors.name.message}
                    </p>
                  )}
                  <div className="input_container">
                    <label className="input_label" htmlFor="email_field">
                      Email
                    </label>
                    <i className="fa-solid fa-envelope icon"></i>
                    <input
                      {...register("email")}
                      placeholder="name@mail.com"
                      className="input_field"
                      type="text"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-center text-danger">
                      {errors.email.message}
                    </p>
                  )}
                  <div className="input_container">
                    <label className="input_label" htmlFor="password_field">
                      Password
                    </label>
                    <i className="fa-solid fa-unlock icon"></i>
                    <input
                      {...register("password")}
                      placeholder="Password"
                      className="input_field"
                      type="password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-center text-danger">
                      {errors.password.message}
                    </p>
                  )}
                  {error && <p className="text-center text-danger">{error}</p>}
                  <button title="Sign In" type="submit" className="sign-in_btn">
                    <span>Registrate</span>
                  </button>

                  <div className="separator">
                    <hr className="line" />
                    <span>Or</span>
                    <hr className="line" />
                  </div>
                  <Link to="" className="sign-in_apl" title="Register">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Inicia sesión</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Register;
