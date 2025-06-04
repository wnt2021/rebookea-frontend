import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../Schemas/loginSchema.jsx";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loading/Loading.jsx";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginUser = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        data,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        localStorage.setItem("userId", res.data.user._id);
        setLoading(true);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data.exists) {
        setError("Esta cuenta no existe");
      } else {
        setError("Contraseña o email incorrecto");
      }
    }
  };

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section id="login" className="login">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <form
                  className="form_container"
                  onSubmit={handleSubmit(loginUser)}
                >
                  <div className="title_container">
                    <p className="title">¿Ya tienes cuenta? ¡Vamos allá!</p>
                    <span className="subtitle">
                      Conéctate para seguir intercambiando y descubriendo libros
                      con la comunidad Rebookea.
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
                  <div className="input_container">
                    <label className="input_label" htmlFor="password_field">
                      Password
                    </label>
                    <i className="fa-solid fa-unlock icon"></i>
                    <input
                      placeholder="Password"
                      name="input-name"
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
                  {error && <p className="text-center text-danger">{error}</p>}
                  <button title="Sign In" type="submit" className="sign-in_btn">
                    <span>Inicia sesión</span>
                  </button>

                  <div className="separator">
                    <hr className="line" />
                    <span>Or</span>
                    <hr className="line" />
                  </div>
                  <Link to="/register" className="sign-in_apl" title="Register">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Registrate</span>
                  </Link>
                  <Link to="/recuperar">
                    <p className="note">Olvidaste tu contraseña</p>
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

export default Login;
