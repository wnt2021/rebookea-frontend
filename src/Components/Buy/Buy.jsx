import "./Buy.css";
import Card from "./Card/Card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactPaginate from "react-paginate";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Buy() {
  const [books, setBooks] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    const listBooks = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/books`
        );
        if (res.data.success) {
          setBooks(res.data.books);
        }
      } catch (error) {
        console.error("Error al registrar libro", error);
      }
    };

    listBooks();
  }, []);

  useEffect(() => {
    const listRecentBooks = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/recent`
        );
        if (res.data.success) {
          setRecentBooks(res.data.books);
        }
      } catch (error) {
        console.error("Error al registrar libro", error);
      }
    };

    listRecentBooks();
  }, []);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectValue = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
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
      <section className="buy-section">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <h3 className="buy-title">Busca, elige y aprende</h3>
            </div>
            <div className="col-lg-6 mt-5 input-container d-flex m-auto gap-3">
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
              <input
                placeholder="Busca tu próximo libro"
                className="input_search"
                type="text"
                value={inputValue}
                onChange={handleInputValue}
              />
            </div>
            <div className="col-lg-6 mt-5">
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
                <option value="Lengua y Literatura" className="category_option">
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
                <option value="Economía y Empresa" className="category_option">
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
          </div>
        </div>
      </section>
      <section className="card-container">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <h3 className="uploaded-title">Subidos recientemente</h3>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 3000 }}
              speed={1000}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {recentBooks &&
                recentBooks.map((e) => (
                  <SwiperSlide>
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
                      icon="fa-comment"
                      isFavorited={e.favorites.includes(currentUserId)}
                      leftButtonText="Guardar"
                      rightButtonText="Comprar"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="col-12 d-flex justify-content-start mt-5">
              <h3 className="uploaded-title">Encuentra lo que buscas</h3>
            </div>
            {currentBooks.length > 0 ? (
              currentBooks.map((e) => (
                <div key={e._id} className="col-lg-4 col-md-6 mt-3 card-hover">
                  <Card
                    id={e._id}
                    userId={e.userId}
                    title={e.title}
                    description={e.description}
                    image={`${import.meta.env.VITE_API_URL}/uploads/${e.image}`}
                    price={e.price.toFixed(2)}
                    category={e.category}
                    isFavorited={e.favorites.includes(currentUserId)}
                    leftButtonText="Guardar"
                    rightButtonText="Comprar"
                  />
                </div>
              ))
            ) : (
              <h3 className="text-center not-found mt-5 mb-5">
                Libros no disponibles...
              </h3>
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
      </section>
    </>
  );
}

export default Buy;
