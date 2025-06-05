import { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Card from "../Buy/Card/Card.jsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const currentUserId = localStorage.getItem("userId");
  const [dataToUpdate, setDataToUpdate] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectValue = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };

  const deleteBook = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/delete/${id}`
      );
      if (res.data.success) {
        setLoading(true);

        setTimeout(() => {
          setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Error al eliminar libro", error);
    }
  };

  useEffect(() => {
    const getBooksByUser = async () => {
      const userId = localStorage.getItem("userId");

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/books-user/${userId}`
        );
        if (res.data.success) {
          setBooks(res.data.books);
        }
      } catch (error) {
        console.error("Error al obtener libro", error);
      }
    };

    getBooksByUser();
  }, []);

  useEffect(() => {
    const getFavorite = async () => {
      const userId = localStorage.getItem("userId");

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/list/${userId}`
        );
        setFavorites(res.data.book);
      } catch (error) {
        console.error("Error al obtener libro", error);
      }
    };

    getFavorite();
  }, []);

  const handleData = (id, title, description, price, image, category) => {
    setDataToUpdate((prev) => ({
      ...prev,
      id,
      title,
      description,
      price,
      image,
      category,
    }));
  };

  const handleUpdate = async (
    id,
    title,
    description,
    image,
    price,
    category
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("category", category);

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/update/${id}`,
        formData
      );
      if (res.data.success) {
        setLoading(true);
        setTimeout(() => {
          navigate(0);
        }, 1000);
      }
    } catch (error) {
      console.error("Error al actualizar libro", error);
    }
  };

  const filterBooks = books.filter((book) => {
    const matchInput =
      inputValue === "" ||
      book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      book.category.toLowerCase().includes(inputValue.toLowerCase());

    const matchSelect =
      selectValue === "" ||
      book.category.toLowerCase().includes(selectValue.toLowerCase());

    return matchInput && matchSelect;
  });

  const itemsPerPage = 6;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentBooks = filterBooks.slice(offset, offset + itemsPerPage);

  return (
    <>
      {loading ? (
        <div className="overlay">
          <Loading />
        </div>
      ) : (
        <section className="profile">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 input-container d-flex m-auto gap-3">
                <i className="fa-solid fa-magnifying-glass icon-search"></i>
                <input
                  placeholder="Busca tu próximo libro"
                  className="input_search"
                  type="text"
                  value={inputValue}
                  onChange={handleInputValue}
                />
              </div>

              <div className="col-lg-6">
                <select
                  className="sell_input"
                  value={selectValue}
                  onChange={handleSelectValue}
                >
                  <option value="" className="category_option">
                    Todas las categorías
                  </option>
                  <option
                    value="Ciencias Sociales y Naturales"
                    className="category_option"
                  >
                    Ciencias Sociales y Naturales
                  </option>
                  <option
                    value="Matemáticas y Estadística"
                    className="category_option"
                  >
                    Matemáticas y Estadística
                  </option>
                  <option
                    value="Lengua y Literatura"
                    className="category_option"
                  >
                    Lengua y Literatura
                  </option>
                  <option
                    value="Historia y Geografía"
                    className="category_option"
                  >
                    Historia y Geografía
                  </option>
                  <option value="Arte y Diseño" className="category_option">
                    Arte y Diseño
                  </option>
                  <option
                    value="Informática y Tecnología"
                    className="category_option"
                  >
                    Informática y Tecnología
                  </option>
                  <option
                    value="Economía y Empresa"
                    className="category_option"
                  >
                    Economía y Empresa
                  </option>
                  <option value="Derecho" className="category_option">
                    Derecho
                  </option>
                  <option
                    value="Psicología y Educación"
                    className="category_option"
                  >
                    Psicología y Educación
                  </option>
                  <option value="Medicina y Salud" className="category_option">
                    Medicina y Salud
                  </option>
                  <option
                    value="Ingeniería y Arquitectura"
                    className="category_option"
                  >
                    Ingeniería y Arquitectura
                  </option>
                  <option value="Filosofía y Ética" className="category_option">
                    Filosofía y Ética
                  </option>
                  <option value="Idiomas" className="category_option">
                    Idiomas
                  </option>
                  <option value="Religión" className="category_option">
                    Religión
                  </option>
                  <option value="Física y química" className="category_option">
                    Física y química
                  </option>
                </select>
              </div>

              <div className="col-12 d-flex justify-content-start">
                <h3 className="favorite-title">Mis libros favoritos</h3>
              </div>
              {favorites.length > 0 ? (
                favorites.map((e) => (
                  <div
                    key={e._id}
                    className="col-lg-4 col-md-6 mt-3 card-hover"
                  >
                    <Card
                      id={e._id}
                      userId={e.userId}
                      title={e.title}
                      description={e.description}
                      image={`${import.meta.env.VITE_API_URL}/uploads/${
                        e.image
                      }`}
                      price={e.price.toFixed(2)}
                      category={e.category}
                      isFavorited={e.favorites.includes(currentUserId)}
                      leftButtonText="Guardar"
                      rightButtonText="Comprar"
                    />
                  </div>
                ))
              ) : (
                <div className="text-center mt-5 mb-5">
                  <h3 className="noFavorites">No tienes libros favoritos</h3>
                  <p className="text-muted">
                    Añade los libros que te gustan o te interesen.
                  </p>
                </div>
              )}
              <div className="col-12 d-flex justify-content-start mt-5">
                <h3 className="favorite-title">Mis libros publicados</h3>
              </div>

              {currentBooks.length > 0 ? (
                currentBooks.map((e) => (
                  <div
                    key={e._id}
                    className="col-lg-4 col-md-6 mt-3 card-hover"
                  >
                    <div className="card-body">
                      <div className="book-image">
                        <img
                          className="img-fluid"
                          src={`${import.meta.env.VITE_API_URL}/uploads/${
                            e.image
                          }`}
                          alt={e.title}
                        />
                        <div className="category">
                          {e.state === "bought" ? "Vendido" : e.category}
                        </div>
                      </div>
                      <div className="book-info p-3">
                        <h3>
                          {e.title} - {e.price.toFixed(2)}€
                        </h3>
                        <p className="card-description">{e.description}</p>
                        {e.state !== "bought" && (
                          <div className="book-actions">
                            <button
                              className="btn-chat"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <div
                                className="flex"
                                onClick={() =>
                                  handleData(
                                    e._id,
                                    e.title,
                                    e.description,
                                    e.price.toFixed(2),
                                    e.image,
                                    e.category
                                  )
                                }
                              >
                                <i className="fa-solid fa-pen-to-square p-1"></i>
                                Actualizar libro
                              </div>
                            </button>
                            <a
                              className="btn-details"
                              onClick={() => deleteBook(e._id)}
                              role="button"
                              tabIndex={0}
                            >
                              Eliminar libro
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-5 mb-5">
                  <img
                    src="/images/icon-book.png"
                    alt="No books"
                    style={{ width: "200px", marginBottom: "20px" }}
                  />
                  <h3 className="notFound">
                    No has publicado ningún libro todavía
                  </h3>
                  <p className="text-muted">
                    Comparte tus libros con otros estudiantes o lectores.
                  </p>
                  <Link to="/upload" className="btn-upload mt-3">
                    Publicar mi primer libro
                  </Link>
                </div>
              )}

              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={Math.ceil(filterBooks.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog d-flex justify-content-center align-items-center min-vh-100">
              <div className="modal-content border-0 bg-transparent">
                <div className="form_container position-relative p-4 bg-white rounded shadow">
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>

                  <div className="title_container text-center">
                    <p className="title">Actualiza tu publicación</p>
                    <span className="subtitle">
                      No estas satisfecho con tu publicación puedes actualizarlo
                      con muy pocos pasos.
                    </span>
                  </div>
                  <br />
                  <div className="input_container">
                    <input
                      type="text"
                      className="input_field"
                      value={dataToUpdate.title}
                      onChange={(e) =>
                        setDataToUpdate((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="input_container">
                    <input
                      type="text"
                      className="input_field"
                      value={dataToUpdate.description}
                      onChange={(e) =>
                        setDataToUpdate((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="input_container">
                    <input
                      type="file"
                      className="input_field form-control"
                      onChange={(e) =>
                        setDataToUpdate((prev) => ({
                          ...prev,
                          image: e.target.files[0],
                        }))
                      }
                    />
                  </div>
                  <div className="input_container">
                    <input
                      type="text"
                      className="input_field"
                      value={`${dataToUpdate.price} €`}
                      onChange={(e) =>
                        setDataToUpdate((prev) => ({
                          ...prev,
                          price: parseFloat(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <div className="input_container">
                    <select
                      className="sell_input"
                      value={dataToUpdate.category}
                      onChange={(e) =>
                        setDataToUpdate((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    >
                      <option value="" className="category_option">
                        Todas las categorías
                      </option>
                      <option
                        value="Ciencias Sociales y Naturales"
                        className="category_option"
                      >
                        Ciencias Sociales y Naturales
                      </option>
                      <option
                        value="Matemáticas y Estadística"
                        className="category_option"
                      >
                        Matemáticas y Estadística
                      </option>
                      <option
                        value="Lengua y Literatura"
                        className="category_option"
                      >
                        Lengua y Literatura
                      </option>
                      <option
                        value="Historia y Geografía"
                        className="category_option"
                      >
                        Historia y Geografía
                      </option>
                      <option value="Arte y Diseño" className="category_option">
                        Arte y Diseño
                      </option>
                      <option
                        value="Informática y Tecnología"
                        className="category_option"
                      >
                        Informática y Tecnología
                      </option>
                      <option
                        value="Economía y Empresa"
                        className="category_option"
                      >
                        Economía y Empresa
                      </option>
                      <option value="Derecho" className="category_option">
                        Derecho
                      </option>
                      <option
                        value="Psicología y Educación"
                        className="category_option"
                      >
                        Psicología y Educación
                      </option>
                      <option
                        value="Medicina y Salud"
                        className="category_option"
                      >
                        Medicina y Salud
                      </option>
                      <option
                        value="Ingeniería y Arquitectura"
                        className="category_option"
                      >
                        Ingeniería y Arquitectura
                      </option>
                      <option
                        value="Filosofía y Ética"
                        className="category_option"
                      >
                        Filosofía y Ética
                      </option>
                      <option value="Idiomas" className="category_option">
                        Idiomas
                      </option>
                      <option value="Religión" className="category_option">
                        Religión
                      </option>
                      <option
                        value="Física y química"
                        className="category_option"
                      >
                        Física y química
                      </option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="sign-in_btn"
                    onClick={() =>
                      handleUpdate(
                        dataToUpdate.id,
                        dataToUpdate.title,
                        dataToUpdate.description,
                        dataToUpdate.image,
                        dataToUpdate.price,
                        dataToUpdate.category
                      )
                    }
                  >
                    <span>Actualizar libro</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Dashboard;
