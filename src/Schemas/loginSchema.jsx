import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email no válido")
    .required("El email es obligatorio"),
  password: yup.string().required("La constraseña es obligatoria"),
});

export default loginSchema;
