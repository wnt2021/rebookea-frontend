import * as yup from "yup";

const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const CheckoutSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "El nombre es obligatorio")
    .required("El nombre es obligatorio"),
  cardNumber: yup
    .string()
    .required("El número de tarjeta es obligatorio")
    .matches(/^[0-9]{16}$/, "La tarjeta debe tener 16 dígitos"),
  expiryDate: yup
    .string()
    .required("La fecha de expiración es obligatoria")
    .matches(expiryDateRegex, "Formato inválido. Usa MM/YY"),
  cvv: yup
    .string()
    .required("El cvv es obligatorio")
    .matches(/^[0-9]{3}$/, "El cvv debe tener 3 dígitos"),
});

export default CheckoutSchema;
