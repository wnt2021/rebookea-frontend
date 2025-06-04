import * as yup from "yup";

const forgotSchema = yup.object({
  email: yup
    .string()
    .email("Email no válido")
    .required("El email es obligatorio"),
});

export default forgotSchema;
