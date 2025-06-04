import * as yup from "yup";

const file_size = 2 * 1024 * 1024;
const format = ["image/jpeg", "image/png", "image/webp"];

const sellSchema = yup.object({
  title: yup.string().required("El título es obligatorio"),
  description: yup.string().required("La descripción es obligatoria"),
  price: yup
    .number()
    .typeError("Precio tiene que ser positivo")
    .positive("El precio tiene que ser mayor o igual a 1")
    .required("El precio tiene que ser obligatorio"),
  image: yup
    .mixed()
    .required("La imagen es obligatoria")
    .test("fileSize", "El archivo es muy grande (máximo 2MB)", (value) => {
      return value && value[0]?.size <= file_size;
    })
    .test("fileformat", "Formato no soportado", (value) => {
      return value && format.includes(value[0]?.type);
    }),
  category: yup.string().required("La categoría es obligatoria"),
});

export default sellSchema;
