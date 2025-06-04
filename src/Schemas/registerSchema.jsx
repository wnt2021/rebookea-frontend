import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Email no válido")
    .required("El email es obligatorio"),
  password: yup.string().required("La constraseña es obligatoria"),
});

export default registerSchema;
