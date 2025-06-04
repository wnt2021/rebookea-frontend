import * as yup from "yup";

const recoverSchema = yup.object({
  password: yup.string().required("La constraseña es obligatoria"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "La constraseña debe coincidir"),
});

export default recoverSchema;
