/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const { cartData, setCartData } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handleAddCart(movie) {
    const find = cartData.find((data) => data.id === movie.id);
    if (!find) {
      setCartData([...cartData, movie]);
      console.log(cartData);
    } else {
      console.log("movie already added to card");
    }
  }
  function handleCloseModal() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
        ></MovieDetailsModal>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          onClick={() => handleMovieSelection(movie)}
          className="w-full object-cover"
          src={getImgUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating}></Rating>
          </div>
          <a
            onClick={() => handleAddCart(movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
